/**
 * Seed script – imports all JSON exports into MongoDB.
 * Usage:  node seed.js
 * Run from the Backend/ directory (so dotenv loads .env correctly).
 */

require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Models
const Division    = require('./models/Division');
const Village     = require('./models/Village');
const CrimeType   = require('./models/CrimeType');
const SubCrimeType = require('./models/SubCrimeType');
const User        = require('./models/User');
const Case        = require('./models/Case');

// Path to JSON files (one level up)
const DATA_DIR = path.join(__dirname, '..');

function loadJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠  File not found: ${filePath} – skipping.`);
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

/** Convert MongoDB extended JSON  { "$oid": "..." }  to plain string */
function toId(val) {
  if (!val) return val;
  if (typeof val === 'object' && val.$oid) return val.$oid;
  return val;
}

/** Convert  { "$date": "..." }  to JS Date */
function toDate(val) {
  if (!val) return val;
  if (typeof val === 'object' && val.$date) return new Date(val.$date);
  return new Date(val);
}

async function upsertMany(Model, docs, idField = '_id') {
  let inserted = 0, skipped = 0;
  for (const doc of docs) {
    const id = toId(doc[idField]);
    const exists = await Model.findById(id);
    if (exists) { skipped++; continue; }
    await new Model({ ...await normalise(Model.modelName, doc), _id: id }).save();
    inserted++;
  }
  return { inserted, skipped };
}

/** Normalise extended-JSON fields per collection */
async function normalise(modelName, doc) {
  const d = { ...doc };
  delete d.__v;

  if (modelName === 'Village') {
    d.divisionId = toId(d.divisionId);
  }
  if (modelName === 'SubCrimeType') {
    d.crimeTypeId = toId(d.crimeTypeId);
  }
  if (modelName === 'Case') {
    d.date      = toDate(d.date);
    d.createdAt = toDate(d.createdAt);
  }
  return d;
}

async function main() {
  console.log('Connecting to MongoDB…');
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected.\n');

  // ── Divisions ────────────────────────────────────────────────────────────
  const divisions = loadJSON('mob.divisions.json');
  const dr = await upsertMany(Division, divisions);
  console.log(`Divisions    – inserted: ${dr.inserted}, skipped (already exists): ${dr.skipped}`);

  // ── Villages / Police Stations ───────────────────────────────────────────
  const villages = loadJSON('mob.villages.json');
  const vr = await upsertMany(Village, villages);
  console.log(`Villages     – inserted: ${vr.inserted}, skipped: ${vr.skipped}`);

  // ── Crime Types ──────────────────────────────────────────────────────────
  const crimeTypes = loadJSON('mob.crimetypes.json');
  const cr = await upsertMany(CrimeType, crimeTypes);
  console.log(`CrimeTypes   – inserted: ${cr.inserted}, skipped: ${cr.skipped}`);

  // ── Sub Crime Types ──────────────────────────────────────────────────────
  const subCrimeTypes = loadJSON('mob.subcrimetypes.json');
  const sr = await upsertMany(SubCrimeType, subCrimeTypes);
  console.log(`SubCrimeTypes– inserted: ${sr.inserted}, skipped: ${sr.skipped}`);

  // ── Users ────────────────────────────────────────────────────────────────
  // Users have hashed passwords in the JSON – import as-is (skip bcrypt rehash)
  const users = loadJSON('mob.users.json');
  let uInserted = 0, uSkipped = 0;
  for (const u of users) {
    const id = toId(u._id);
    const exists = await User.findById(id);
    if (exists) { uSkipped++; continue; }
    // Use raw password hash directly
    await User.collection.insertOne({
      _id: new mongoose.Types.ObjectId(id),
      name: u.name,
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      password: u.password,   // already bcrypt-hashed
      role: u.role,
      phone: u.phone,
      photo: u.photo,
      policeStation: u.policeStation
        ? new mongoose.Types.ObjectId(toId(u.policeStation))
        : undefined,
      __v: 0
    });
    uInserted++;
  }
  console.log(`Users        – inserted: ${uInserted}, skipped: ${uSkipped}`);

  // ── Cases ────────────────────────────────────────────────────────────────
  const cases = loadJSON('mob.cases.json');
  let cInserted = 0, cSkipped = 0;
  for (const c of cases) {
    if (!c._id) continue; // skip empty objects
    const id = toId(c._id);
    const exists = await Case.findById(id);
    if (exists) { cSkipped++; continue; }
    try {
      await Case.collection.insertOne({
        _id: new mongoose.Types.ObjectId(id),
        name: c.name,
        division: c.division,
        village: c.village,
        crimeType: c.crimeType,
        subType: c.subType,
        section: c.section,
        description: c.description,
        date: toDate(c.date),
        address: c.address,
        photo: c.photo || null,
        aadhar: c.aadhar || '',
        mobile: c.mobile || '',
        createdAt: toDate(c.createdAt) || new Date(),
        __v: 0
      });
      cInserted++;
    } catch (err) {
      // Duplicate key or validation – skip silently
    }
  }
  console.log(`Cases        – inserted: ${cInserted}, skipped: ${cSkipped}`);

  await mongoose.connection.close();
  console.log('\n✅  Seed complete.');
}

main().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
