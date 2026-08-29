const express = require('express');
const router = express.Router();
const { getCategorias, getCategoriaPorId } = require('../controllers/categorias.controller');

router.get('/', getCategorias);
router.get('/:id', getCategoriaPorId);

module.exports = router;