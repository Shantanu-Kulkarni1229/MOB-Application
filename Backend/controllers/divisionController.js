const Division = require('../models/Division');
const Village = require('../models/Village');

exports.getDivisions = async (req, res) => {
  try {
    const divisions = await Division.find();
    res.json(divisions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDivision = async (req, res) => {
  try {
    const division = new Division(req.body);
    await division.save();
    res.status(201).json(division);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDivision = async (req, res) => {
  try {
    const updatedDivision = await Division.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDivision);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exports.deleteDivision = async (req, res) => {
//   try {
//     await Division.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Division deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
exports.deleteDivision = async (req, res) => {
  try {
    const divisionId = req.params.id;

    // Delete all villages related to this division
    await Village.deleteMany({ divisionId });

    // Delete the division itself
    await Division.findByIdAndDelete(divisionId);

    res.json({ message: 'Division and its related villages deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
