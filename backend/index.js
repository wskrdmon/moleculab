const express = require('express'); //crea una instancia de un enrutador de Express, que se utiliza para definir rutas y manejar solicitudes HTTP relacionadas con la autenticación.
const cors = require('cors'); //importa el middleware CORS, que permite que el servidor acepte solicitudes de diferentes orígenes, lo que es útil para permitir que aplicaciones web en diferentes dominios accedan a la API.
const moleculasRoutes = require('./src/routes/moleculas.routes');
const categoriasRoutes = require('./src/routes/categorias.routes');
const authRoutes = require('./src/routes/auth.routes');  //importamos los 3 routers de rutas, que contienen las rutas relacionadas con las moléculas, categorías y autenticación, respectivamente.
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => { //define una ruta GET para /api/ping, que responde con un objeto JSON que indica que el servidor está funcionando correctamente. Esto se utiliza comúnmente como una verificación de estado del servidor.
  res.json({ status: 'ok' });
});

app.use('/api/moleculas', moleculasRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});