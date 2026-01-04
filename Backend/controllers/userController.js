const User = require('../models/User');
const bcrypt = require('bcrypt');

// Get all users (Admin only)
exports.getUsers = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  const users = await User.find({}, '-password');
  res.json(users);
};

// Get user profile (current user)
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, '-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update user profile (current user)
exports.updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, phone, currentPassword, newPassword } = req.body;

    // Find the user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update basic info
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phone) user.phone = phone;

    // Update password if provided
    if (currentPassword && newPassword) {
      // Verify current password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Current password is incorrect' });
      }

      // Hash new password
      user.password = await bcrypt.hash(newPassword, 10);
    }

    await user.save();

    // Return updated user without password
    const updatedUser = await User.findById(req.user.id, '-password');
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Add user (Admin only)
exports.addUser = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  try {
    const { firstName, lastName, email, phone, policeStation, role } = req.body;
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null;
    // console.log(req.body.password);

    const newUser = new User({ firstName, lastName, email, phone, policeStation, role, password: req.body.password, photo: photoPath });
    console.log(newUser)
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: 'Server error' });
  }
};



// Update user (Admin only)
exports.updateUser = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  try {
    const { firstName, lastName, email, phone, policeStation, role, password } = req.body;
    const updatedData = { firstName, lastName, email, phone, policeStation, role };

    if (req.file) {
      updatedData.photo = `/uploads/${req.file.filename}`;
    }

    // Only update password if provided
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};




// Delete user (Admin only)
exports.deleteUser = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};