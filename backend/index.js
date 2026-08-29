const express = require('express');
const cors = require('cors');
const moleculasRoutes = require('./src/routes/moleculas.routes');
const categoriasRoutes = require('./src/routes/categorias.routes');
const app = express();   //crea el servidor de express
const PORT = 3001;

app.use(cors()); //habilita el CORS para permitir solicitudes desde otros dominios
app.use(express.json()); //es para que el servidor pueda recibir datos en formato JSON en el cuerpo de las solicitudes

app.get('/api/ping', (req, res) => {  //un ednpoint de prueba para verificar que el servidor está funcionando correctamente
  res.json({ status: 'ok' });
});

app.use('/api/moleculas', moleculasRoutes);
app.use('/api/categorias', categoriasRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); //arranca el servidor y muestra un mensaje en la consola indicando que está corriendo y en qué puerto
});