const SubCrimeType = require('../models/SubCrimeType');

exports.getSubCrimeTypes = async (req, res) => {
  try {
    const subCrimeTypes = await SubCrimeType.find().populate('crimeTypeId', 'name');
    res.json(subCrimeTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubCrimeTypesByCrimeType = async (req, res) => {
  try {
    const subCrimeTypes = await SubCrimeType.find({ crimeTypeId: req.params.crimeTypeId });
    res.json(subCrimeTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSubCrimeType = async (req, res) => {
  try {
    const subCrimeType = new SubCrimeType(req.body);
    await subCrimeType.save();
    res.status(201).json(subCrimeType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSubCrimeType = async (req, res) => {
  try {
    const updatedSubCrimeType = await SubCrimeType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSubCrimeType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSubCrimeType = async (req, res) => {
  try {
    await SubCrimeType.findByIdAndDelete(req.params.id);
    res.json({ message: 'SubCrime Type deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
