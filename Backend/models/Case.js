// const mongoose = require('mongoose');

// const caseSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   village: { type: String, required: true },
//   theftType: { type: String, required: true },
//   description: { type: String, required: true },
//   section: { type: String, required: true },
//   date: { type: Date},
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Case', caseSchema);


const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  division: { type: String, required: true },
  village: { type: String, required: true },
  crimeType: { type: String, required: true },
  subType: { type: String, required: true },
  section: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  address: { type: String, required: true },
  aadhar: { type: String },
  mobile: { type: String },
  photo: { type: String }, // Store image URL or path
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Case", caseSchema);
