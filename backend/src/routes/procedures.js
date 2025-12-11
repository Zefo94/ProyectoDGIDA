const express = require('express');
const router = express.Router();
const Procedure = require('../models/Procedure');
const factory = require('../controllers/factoryController');
const auth = require('../middleware/auth');

// --- CRUD TRÁMITES ---
router.get('/', factory.getAll(Procedure));
router.get('/:id', factory.getOne(Procedure));
router.post('/', auth, factory.create(Procedure));
router.put('/:id', auth, factory.update(Procedure));
router.delete('/:id', auth, factory.delete(Procedure));

module.exports = router;