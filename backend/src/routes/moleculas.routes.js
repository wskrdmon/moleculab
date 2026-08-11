const express = require('express');
const router = express.Router();
const {
  getMoleculas,
  getMoleculaPorId,
  crearMolecula,
  actualizarMolecula,
  eliminarMolecula,
} = require('../controllers/moleculas.controller');

router.get('/', getMoleculas);
router.get('/:id', getMoleculaPorId);
router.post('/', crearMolecula);
router.put('/:id', actualizarMolecula);
router.delete('/:id', eliminarMolecula);

module.exports = router;