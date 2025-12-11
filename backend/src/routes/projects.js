const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const factory = require('../controllers/factoryController');
const auth = require('../middleware/auth');

// --- CRUD PROYECTOS ---
router.get('/', factory.getAll(Project));
router.get('/:id', factory.getOne(Project));
router.post('/', auth, factory.create(Project));
router.put('/:id', auth, factory.update(Project));
router.delete('/:id', auth, factory.delete(Project));

module.exports = router;