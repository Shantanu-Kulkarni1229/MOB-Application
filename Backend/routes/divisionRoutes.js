const express = require('express');
const { getDivisions, createDivision, updateDivision, deleteDivision } = require('../controllers/divisionController');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const { logUserAction } = require('../middleware/logMiddleware');

const router = express.Router();

router.get('/', verifyToken, authorizeRole(['admin', 'police']), logUserAction('view_divisions'), getDivisions);
router.post('/', verifyToken, authorizeRole(['admin']), logUserAction('add_division'), createDivision);
router.put('/:id', verifyToken, authorizeRole(['admin']), logUserAction('edit_division'), updateDivision);
router.delete('/:id', verifyToken, authorizeRole(['admin']), logUserAction('delete_division'), deleteDivision);

module.exports = router;