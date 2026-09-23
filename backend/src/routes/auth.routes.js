const express = require('express');  //crea una instancia de un enrutador de Express, que se utiliza para definir rutas y manejar solicitudes HTTP relacionadas con la autenticación.
const router = express.Router();  //crea un router de Express, que se utiliza para definir rutas y manejar solicitudes HTTP relacionadas con la autenticación.
const { registro,login } = require('../controllers/auth.controller'); //es para importar las funciones de registro y login desde el archivo auth.controller.js, que contienen la lógica para manejar el registro y el inicio de sesión de los usuarios.


router.post('/registro', registro); 
router.post('/login', login);

module.exports = router;