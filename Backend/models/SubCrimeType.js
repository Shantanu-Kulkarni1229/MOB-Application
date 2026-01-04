const mongoose = require('mongoose');

const SubCrimeTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  crimeTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'CrimeType', required: true },
});

module.exports = mongoose.model('SubCrimeType', SubCrimeTypeSchema);
