const express = require('express');
const {
  getVillages,
  getVillagesByDivision,
  createVillage,
  updateVillage,
  deleteVillage,
} = require('../controllers/villageController');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const { logUserAction } = require('../middleware/logMiddleware');

const router = express.Router();

router.get('/', verifyToken, authorizeRole(['admin', 'police']), logUserAction('view_villages'), getVillages);
router.get('/by-division/:divisionId', verifyToken, authorizeRole(['admin', 'police']), logUserAction('view_villages_by_division'), getVillagesByDivision);
router.post('/', verifyToken, authorizeRole(['admin']), logUserAction('add_village'), createVillage);
router.put('/:id', verifyToken, authorizeRole(['admin']), logUserAction('edit_village'), updateVillage);
router.delete('/:id', verifyToken, authorizeRole(['admin']), logUserAction('delete_village'), deleteVillage);

module.exports = router;