const express = require('express');
const router = express.Router();
const Institution = require('../models/Institution');
const factory = require('../controllers/factoryController');
const auth = require('../middleware/auth');

// --- CRUD INSTITUCIONES ---

// 1. Listar todas (Público)
router.get('/', factory.getAll(Institution));

// 2. Obtener una por ID (Público)
router.get('/:id', factory.getOne(Institution));

// 3. Crear (Privado - Requiere Token)
router.post('/', auth, factory.create(Institution));

// 4. Actualizar (Privado - Requiere Token)
router.put('/:id', auth, factory.update(Institution));

// 5. Eliminar (Privado - Requiere Token)
router.delete('/:id', auth, factory.delete(Institution));

module.exports = router;