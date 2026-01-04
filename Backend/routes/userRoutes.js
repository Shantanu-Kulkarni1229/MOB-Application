const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const { logUserAction } = require('../middleware/logMiddleware');
const upload = require("../middleware/uploadMiddleware");

// Get current user profile
router.get('/profile', verifyToken, logUserAction('view_profile'), userController.getUserProfile);

// Update current user profile
router.put('/profile', verifyToken, logUserAction('update_profile'), userController.updateUserProfile);

// Only Admin can manage users
router.get('/', verifyToken, authorizeRole(['admin']),upload.single("photo"), logUserAction('view_users'), userController.getUsers);
router.post('/', verifyToken, authorizeRole(['admin']),upload.single("photo"), logUserAction('add_user'), userController.addUser);
router.put('/:id', verifyToken, authorizeRole(['admin']),upload.single("photo"), logUserAction('edit_user'), userController.updateUser);
router.delete('/:id', verifyToken, authorizeRole(['admin']),upload.single("photo"), logUserAction('delete_user'), userController.deleteUser);

module.exports = router;



