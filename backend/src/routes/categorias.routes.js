const express = require('express');
const router = express.Router();  //Crea un router independiente para manejar las rutas relacionadas con las categorías.
const { getCategorias, getCategoriaPorId } = require('../controllers/categorias.controller');  //importa las funciones del controlador de categorías, que contienen la lógica para manejar las solicitudes relacionadas con las categorías.

router.get('/', getCategorias); //Define una ruta GET para obtener todas las categorías, que llama a la función getCategorias del controlador de categorías.
router.get('/:id', getCategoriaPorId); //Define una ruta GET para obtener una categoría específica por su ID, que llama a la función getCategoriaPorId del controlador de categorías.

module.exports = router; //Exporta el router para que pueda ser utilizado en otras partes de la aplicación, como en el archivo principal de rutas.