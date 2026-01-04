const express = require('express');
const router = express.Router();
const { verifyToken, authorizeRole } = require('../middleware/auth');

router.get('/dashboard', verifyToken, authorizeRole(['police']), (req, res) => {
  res.json({ message: 'Welcome to Police Dashboard' });
});

module.exports = router;
