const express = require('express');
const {
  getCrimeTypes,
  createCrimeType,
  updateCrimeType,
  deleteCrimeType,
} = require('../controllers/crimeTypeController');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const { logUserAction } = require('../middleware/logMiddleware');

const router = express.Router();

router.get('/', verifyToken, authorizeRole(['admin', 'police']), logUserAction('view_crime_types'), getCrimeTypes);
router.post('/', verifyToken, authorizeRole(['admin']), logUserAction('add_crime_type'), createCrimeType);
router.put('/:id', verifyToken, authorizeRole(['admin']), logUserAction('edit_crime_type'), updateCrimeType);
router.delete('/:id', verifyToken, authorizeRole(['admin']), logUserAction('delete_crime_type'), deleteCrimeType);

module.exports = router;