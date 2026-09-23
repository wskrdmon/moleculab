const express = require('express');
const router = express.Router();
const {
  getMoleculas,
  getMoleculaPorId,
  crearMolecula,
  actualizarMolecula,
  eliminarMolecula,
} = require('../controllers/moleculas.controller');  //importa las 5 funciones del controlador de moléculas, que contienen la lógica para manejar las solicitudes relacionadas con las moléculas.
const verificarToken = require('../middlewares/verificarToken'); //importa el middleware de verificación de token, que se utiliza para proteger las rutas que requieren autenticación.

router.get('/', getMoleculas); 
router.get('/:id', getMoleculaPorId);
router.post('/', verificarToken, crearMolecula); //esta ruta POST para crear una nueva molécula está protegida por el middleware de verificación de token, lo que significa que solo los usuarios autenticados pueden acceder a esta ruta.
router.put('/:id', verificarToken, actualizarMolecula); //esta ruta PUT para actualizar una molécula existente también está protegida por el middleware de verificación de token, lo que significa que solo los usuarios autenticados pueden acceder a esta ruta.
router.delete('/:id', verificarToken, eliminarMolecula); //esta ruta DELETE para eliminar una molécula existente también está protegida por el middleware de verificación de token, lo que significa que solo los usuarios autenticados pueden acceder a esta ruta.

module.exports = router; 