const Case = require('../models/Case');
const Division = require('../models/Division');
const Village = require('../models/Village');
const User = require('../models/User');

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

// Get live users (admin only)
exports.getLiveUsers = async (req, res) => {
  try {
    // Consider users active if they were online in the last 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    
    const liveUsers = await User.find({
      lastActive: { $gte: fiveMinutesAgo },
      role: { $ne: 'admin' } // Exclude admins from the list
    })
    .select('firstName lastName email policeStation lastActive isOnline role')
    .sort({ lastActive: -1 });

    const totalLiveUsers = liveUsers.length;

    res.json({ 
      totalLiveUsers,
      liveUsers 
    });
  } catch (err) {
    console.error('Error fetching live users:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
