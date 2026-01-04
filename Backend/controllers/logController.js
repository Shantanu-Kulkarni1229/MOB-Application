const Log = require('../models/Log');
const User = require('../models/User');

// Get all logs with pagination and filters
exports.getLogs = async (req, res) => {
  try {
    const { userId, action, startDate, endDate, page = 1, limit = 20 } = req.query;

    // Build filter object
    let filter = {};

    if (userId) filter.userId = userId;
    if (action) filter.action = action;

    // Date range filter
    if (startDate || endDate) {
      filter.timestamp = {};
      if (startDate) filter.timestamp.$gte = new Date(startDate);
      if (endDate) filter.timestamp.$lte = new Date(endDate);
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get logs with pagination and populate user details
    const logs = await Log.find(filter)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('userId', 'firstName lastName email role');

    // Get total count for pagination
    const totalLogs = await Log.countDocuments(filter);

    res.status(200).json({
      logs,
      totalPages: Math.ceil(totalLogs / parseInt(limit)),
      currentPage: parseInt(page),
      totalLogs
    });
  } catch (err) {
    console.error('Error fetching logs:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create a new log entry
exports.createLog = async (req, res) => {
  console.log(1111111111111111)
  console.log(req);
  
  try {
    const { userId, action, details } = req.body;

    // Get IP Address
    let ipAddress = req.headers['x-forwarded-for']
      ? req.headers['x-forwarded-for'].split(',')[0].trim()
      : req.socket?.remoteAddress || req.connection?.remoteAddress;

    // Get User-Agent
    const userAgent = req.headers['user-agent'];

    const newLog = new Log({
      userId,
      action,
      details,
      ipAddress,
      userAgent
    });

    await newLog.save();
    res.status(201).json(newLog);
  } catch (err) {
    console.error('Error creating log:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};


// Get log statistics
exports.getLogStats = async (req, res) => {
  try {
    // Get action counts
    const actionCounts = await Log.aggregate([
      { $group: { _id: '$action', count: { $sum: 1 } } }
    ]);

    // Get user activity counts
    const userActivityCounts = await Log.aggregate([
      { $group: { _id: '$userId', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Populate user details for the top users
    const userIds = userActivityCounts.map(item => item._id);
    const users = await User.find({ _id: { $in: userIds } }, 'firstName lastName email');

    // Map user details to activity counts
    const topUserActivity = userActivityCounts.map(item => {
      const user = users.find(u => u._id.toString() === item._id.toString());
      return {
        userId: item._id,
        count: item.count,
        user: user ? `${user.firstName} ${user.lastName}` : 'Unknown User',
        email: user ? user.email : 'N/A'
      };
    });

    // Get daily activity for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dailyActivity = await Log.aggregate([
      {
        $match: {
          timestamp: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$timestamp" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.status(200).json({
      actionCounts,
      topUserActivity,
      dailyActivity
    });
  } catch (err) {
    console.error('Error fetching log statistics:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete logs older than a certain date
exports.deleteLogs = async (req, res) => {
  try {
    const { olderThan } = req.body;

    if (!olderThan) {
      return res.status(400).json({ error: 'Please provide a date' });
    }

    const date = new Date(olderThan);
    const result = await Log.deleteMany({ timestamp: { $lt: date } });

    res.status(200).json({
      message: `Successfully deleted ${result.deletedCount} logs older than ${olderThan}`
    });
  } catch (err) {
    console.error('Error deleting logs:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};