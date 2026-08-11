const pool = require('../config/db');

const getMoleculas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM moleculas');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const crearMolecula = async (req, res) => {
  try {
    const { nombre, formula } = req.body;
    const result = await pool.query(
      'INSERT INTO moleculas (nombre, formula) VALUES ($1, $2) RETURNING *',
      [nombre, formula]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarMolecula = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, formula } = req.body;
    const result = await pool.query(
      'UPDATE moleculas SET nombre = $1, formula = $2 WHERE id = $3 RETURNING *',
      [nombre, formula, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Molécula no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const eliminarMolecula = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM moleculas WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Molécula no encontrada' });
    }
    res.json({ mensaje: 'Molécula eliminada', molecula: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMoleculaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM moleculas WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Molécula no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getMoleculas, getMoleculaPorId, crearMolecula, actualizarMolecula, eliminarMolecula };