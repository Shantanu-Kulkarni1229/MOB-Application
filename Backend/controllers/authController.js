const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Log = require('../models/Log');

exports.login = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.findOne({ email, role });
    if (!user) return res.status(404).json({ message: 'User not found' });
    console.log(password, user.password)
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Log the login action
    const log = new Log({
      userId: user._id,
      action: 'login',
      details: `User logged in: ${email}`,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    });
    
    await log.save();

    res.json({ token, username:user.email, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.logout = async (req, res) => {
  try {
    // Log the logout action
    if (req.user) {
      const log = new Log({
        userId: req.user.id,
        action: 'logout',
        details: 'User logged out',
        ipAddress: req.ip || req.connection.remoteAddress,
        userAgent: req.headers['user-agent']
      });
      
      await log.save();
    }
    
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};