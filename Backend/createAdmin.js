const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'shantanuprogramming@gmail.com' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      await mongoose.connection.close();
      return;
    }

    // Create admin user
    const adminUser = new User({
      firstName: 'Shantanu',
      lastName: 'Kulkarni',
      email: 'shantanuprogramming@gmail.com',
      phone: '8482813688',
      policeStation: 'Admin Headquarters',
      password: 'shantanu@123',
      role: 'admin'
    });

    await adminUser.save();
    console.log('✓ Admin user created successfully!');
    console.log('Email: shantanuprogramming@gmail.com');
    console.log('Password: shantanu@123');
    console.log('Role: admin');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
