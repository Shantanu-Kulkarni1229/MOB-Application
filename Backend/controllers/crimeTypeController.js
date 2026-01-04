const CrimeType = require('../models/CrimeType');
const SubCrimeType = require('../models/SubCrimeType');

exports.getCrimeTypes = async (req, res) => {
  try {
    const crimeTypes = await CrimeType.find();
    res.json(crimeTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCrimeType = async (req, res) => {
  try {
    const crimeType = new CrimeType(req.body);
    await crimeType.save();
    res.status(201).json(crimeType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCrimeType = async (req, res) => {
  try {
    const updatedCrimeType = await CrimeType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCrimeType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exports.deleteCrimeType = async (req, res) => {
//   try {
//     await CrimeType.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Crime Type deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
exports.deleteCrimeType = async (req, res) => {
  try {
    const crimeTypeId = req.params.id;

    // Delete all sub-crime types related to this crime type
    await SubCrimeType.deleteMany({ crimeTypeId });

    // Delete the crime type itself
    await CrimeType.findByIdAndDelete(crimeTypeId);

    res.json({ message: 'Crime Type and its related sub-crime types deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
