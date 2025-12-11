const express = require('express');
const router = express.Router();
const Program = require('../models/Program');
const factory = require('../controllers/factoryController');
const auth = require('../middleware/auth');

// --- CRUD PROGRAMAS ---
router.get('/', factory.getAll(Program));
router.get('/:id', factory.getOne(Program));
router.post('/', auth, factory.create(Program));
router.put('/:id', auth, factory.update(Program));
router.delete('/:id', auth, factory.delete(Program));

module.exports = router;