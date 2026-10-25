const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    
    // Update user's lastActive timestamp
    await User.findByIdAndUpdate(decoded.id, { 
      lastActive: new Date(),
      isOnline: true 
    });
    
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};


exports.authorizeRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};
