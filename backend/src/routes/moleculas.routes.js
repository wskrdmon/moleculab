const express = require('express');
const router = express.Router();
const {
  getMoleculas,
  getMoleculaPorId,
  crearMolecula,
  actualizarMolecula,
  eliminarMolecula,
} = require('../controllers/moleculas.controller');
const verificarToken = require('../middlewares/verificarToken');

router.get('/', getMoleculas);
router.get('/:id', getMoleculaPorId);
router.post('/', verificarToken, crearMolecula);
router.put('/:id', verificarToken, actualizarMolecula);
router.delete('/:id', verificarToken, eliminarMolecula);

module.exports = router;