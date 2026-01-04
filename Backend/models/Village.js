const mongoose = require('mongoose');

const VillageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  divisionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true },
});

module.exports = mongoose.model('Village', VillageSchema);
