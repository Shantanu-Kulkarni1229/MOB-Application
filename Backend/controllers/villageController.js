const Village = require('../models/Village');

exports.getVillages = async (req, res) => {
  try {
    const villages = await Village.find().populate('divisionId', 'name');
    res.json(villages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVillagesByDivision = async (req, res) => {
  try {
    const villages = await Village.find({ divisionId: req.params.divisionId });
    res.json(villages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVillage = async (req, res) => {
  try {
    const village = new Village(req.body);
    await village.save();
    res.status(201).json(village);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateVillage = async (req, res) => {
  try {
    const updatedVillage = await Village.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVillage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteVillage = async (req, res) => {
  try {
    await Village.findByIdAndDelete(req.params.id);
    res.json({ message: 'Village deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
