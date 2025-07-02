const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria.controller');
const auth = require('../middlewares/authMiddleware');

// Endpoints protegidos
router.get('/', auth, categoriaController.getAll);
router.get('/:id', auth, categoriaController.getById);
router.post('/', auth, categoriaController.create);
router.put('/:id', auth, categoriaController.update);
router.delete('/:id', auth, categoriaController.delete);

module.exports = router;
