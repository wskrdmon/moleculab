const express = require('express');
const cors = require('cors');
const moleculasRoutes = require('./src/routes/moleculas.routes');
const categoriasRoutes = require('./src/routes/categorias.routes');
const authRoutes = require('./src/routes/auth.routes');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/moleculas', moleculasRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});