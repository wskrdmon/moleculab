const express = require('express');
const cors = require('cors');
const moleculasRoutes = require('./src/routes/moleculas.routes');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/ping', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/moleculas', moleculasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});