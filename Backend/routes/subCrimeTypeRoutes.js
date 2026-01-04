const express = require('express');
const {
  getSubCrimeTypes,
  getSubCrimeTypesByCrimeType,
  createSubCrimeType,
  updateSubCrimeType,
  deleteSubCrimeType,
} = require('../controllers/subCrimeTypeController');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const { logUserAction } = require('../middleware/logMiddleware');

const router = express.Router();

router.get('/', verifyToken, authorizeRole(['admin', 'police']), logUserAction('view_sub_crime_types'), getSubCrimeTypes);
router.get('/by-crime-type/:crimeTypeId', verifyToken, authorizeRole(['admin', 'police']), logUserAction('view_sub_crime_types_by_crime_type'), getSubCrimeTypesByCrimeType);
router.post('/', verifyToken, authorizeRole(['admin']), logUserAction('add_sub_crime_type'), createSubCrimeType);
router.put('/:id', verifyToken, authorizeRole(['admin']), logUserAction('edit_sub_crime_type'), updateSubCrimeType);
router.delete('/:id', verifyToken, authorizeRole(['admin']), logUserAction('delete_sub_crime_type'), deleteSubCrimeType);

module.exports = router;