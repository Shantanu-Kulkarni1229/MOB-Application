const Log = require('../models/Log');

// Middleware to log user actions
exports.logUserAction = (action) => {
  
  return async (req, res, next) => {
    // console.log(req.headers);
    // console.log(req.ip);
    // console.log(req.connection.remoteAddress);
    // console.log(req.socket);
    
    // Store the original send function
    const originalSend = res.send;
    
    // Override the send function to log after successful response
    res.send = function(data) {
      // Only log if response is successful (status code 2xx)
      if (res.statusCode >= 200 && res.statusCode < 300 && req.user) {
        try {
          // Create log entry
          const log = new Log({
            userId: req.user.id,
            action: action,
            details: getActionDetails(req, action),
            ipAddress: req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress,
            userAgent: req.headers['user-agent']
          });
          
          // Save log asynchronously (don't wait for it to complete)
          log.save().catch(err => console.error('Error saving log:', err));
        } catch (err) {
          console.error('Error in logging middleware:', err);
        }
      }
      
      // Call the original send function
      return originalSend.call(this, data);
    };
    
    next();
  };
};

// Helper function to get action details based on the request and action type
function getActionDetails(req, action) {
  switch (action) {
    case 'login':
      return `User logged in: ${req.body.email}`;
    
    case 'logout':
      return 'User logged out';
    
    case 'view_case':
      return `Viewed case${req.params.id ? ` ID: ${req.params.id}` : 's'}`;
    
    case 'add_case':
      return `Added new case: ${req.body.name || 'Unknown'}`;
    
    case 'edit_case':
      return `Edited case ID: ${req.params.id}`;
    
    case 'delete_case':
      return `Deleted case ID: ${req.params.id}`;
    
    default:
      return `${action}: ${req.method} ${req.originalUrl}`;
  }
}