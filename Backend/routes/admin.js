const express = require('express');
const router = express.Router();
const { verifyToken, authorizeRole } = require('../middleware/auth');

router.get('/dashboard', verifyToken, authorizeRole(['admin']), (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});

module.exports = router;
