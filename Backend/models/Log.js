const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  action: { 
    type: String, 
    required: true,
    enum: [
      'login', 
      'logout', 
      'view_case', 
      'add_case', 
      'edit_case', 
      'delete_case',
      'view_profile',
      'update_profile',
      'view_users',
      'add_user',
      'edit_user',
      'delete_user',
      'view_crime_types',
      'add_crime_type',
      'edit_crime_type',
      'delete_crime_type',
      'view_divisions',
      'add_division',
      'edit_division',
      'delete_division',
      'view_villages',
      'view_villages_by_division',
      'add_village',
      'edit_village',
      'delete_village',
      'view_sub_crime_types',
      'view_sub_crime_types_by_crime_type',
      'add_sub_crime_type',
      'edit_sub_crime_type',
      'delete_sub_crime_type',
      'other'
    ]
  },
  details: { 
    type: String 
  },
  ipAddress: { 
    type: String 
  },
  userAgent: { 
    type: String 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Log', logSchema);