const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { verifyToken, authorizeRole } = require('../middleware/auth');


router.get('/stats',
    verifyToken,
    authorizeRole(['admin','police']),
    dashboardController.getStats);

module.exports = router;
