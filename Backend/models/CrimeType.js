const mongoose = require('mongoose');

const CrimeTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('CrimeType', CrimeTypeSchema);
