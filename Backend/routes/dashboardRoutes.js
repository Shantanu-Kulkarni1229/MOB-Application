const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { verifyToken, authorizeRole } = require('../middleware/auth');


router.get('/stats',
    verifyToken,
    authorizeRole(['admin','police']),
    dashboardController.getStats);

router.get('/live-users',
    verifyToken,
    authorizeRole(['admin']),
    dashboardController.getLiveUsers);

module.exports = router;
