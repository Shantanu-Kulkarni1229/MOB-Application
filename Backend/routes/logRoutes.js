const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const { verifyToken, authorizeRole } = require('../middleware/auth');

// Get all logs (Admin only)
router.get('/', 
  verifyToken, 
  authorizeRole(['admin']), 
  logController.getLogs
);

// Create a new log entry
router.post('/', 
  verifyToken, 
  logController.createLog
);

// Get log statistics (Admin only)
router.get('/stats', 
  verifyToken, 
  authorizeRole(['admin']), 
  logController.getLogStats
);

// Delete logs older than a certain date (Admin only)
router.delete('/', 
  verifyToken, 
  authorizeRole(['admin']), 
  logController.deleteLogs
);

module.exports = router;