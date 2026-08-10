const express = require('express');
const router = express.Router();
const {
  getMoleculas,
  crearMolecula,
  actualizarMolecula,
  eliminarMolecula,
} = require('../controllers/moleculas.controller');

router.get('/', getMoleculas);
router.post('/', crearMolecula);
router.put('/:id', actualizarMolecula);
router.delete('/:id', eliminarMolecula);

module.exports = router;