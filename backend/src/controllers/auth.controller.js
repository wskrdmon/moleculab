const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registro = async (req, res) => {
  try {
    const { nombre_completo, correo, password } = req.body;
    const password_hash = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO usuarios (nombre_completo, correo, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, nombre_completo, correo, rol, creado_en
    `;
    const values = [nombre_completo, correo, password_hash];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const query = 'SELECT * FROM usuarios WHERE correo = $1';
    const result = await pool.query(query, [correo]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const usuario = result.rows[0];
    const passwordValida = await bcrypt.compare(password, usuario.password_hash);

    if (!passwordValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    await pool.query('UPDATE usuarios SET ultimo_acceso = now() WHERE id = $1', [usuario.id]);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registro, login };