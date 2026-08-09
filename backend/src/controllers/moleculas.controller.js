const pool = require('../config/db');

const getMoleculas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM moleculas');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getMoleculas };