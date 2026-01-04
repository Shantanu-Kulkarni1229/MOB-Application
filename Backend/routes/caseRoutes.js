const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const upload = require("../middleware/uploadMiddleware");
const { logUserAction } = require('../middleware/logMiddleware');

// Get all cases (Admin and Police can access)
router.get('/',
  verifyToken,
  authorizeRole(['admin', 'police']),
  logUserAction('view_case'),
  caseController.getCases
);

// Create new case (Only Admin can access)
router.post('/',
  verifyToken,
  authorizeRole(['admin']),
  upload.single("photo"),
  logUserAction('add_case'),
  caseController.addCase
);

// Edit case (Only Admin can access)
router.put('/:id',
  verifyToken,
  authorizeRole(['admin']),
  upload.single("photo"),
  logUserAction('edit_case'),
  caseController.editCase
);

// Delete case (Only Admin can access)
router.delete('/:id',
  verifyToken,
  authorizeRole(['admin']),
  logUserAction('delete_case'),
  caseController.deleteCase
);

module.exports = router;