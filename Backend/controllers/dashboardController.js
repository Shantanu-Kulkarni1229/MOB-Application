const Case = require('../models/Case');
const Division = require('../models/Division');
const Village = require('../models/Village');

exports.getStats = async (req, res) => {
  try {
    const casesByVillage = await Case.aggregate([
      { $group: { _id: '$village', count: { $sum: 1 } } }
    ]);
    const casesByTheftType = await Case.aggregate([
      { $group: { _id: '$crimeType', count: { $sum: 1 } } }
    ]);
    const totalCases = await Case.countDocuments();
    const totalPoliceStation = await Village.countDocuments()
    const totalDivisions = await Division.countDocuments();


    res.json({ totalCases, casesByVillage, casesByTheftType, totalPoliceStation,totalDivisions  });
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: 'Server error' });
  }
};
