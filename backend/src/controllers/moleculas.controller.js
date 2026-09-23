const pool = require('../config/db');

const getMoleculas = async (req, res) => { // Obtener todas las moléculas, con opción de filtrar por categoría
  try {
    const { categoria_id } = req.query;

    let query = `
      SELECT m.*, c.nombre AS categoria_nombre, c.color AS categoria_color, c.imagen AS categoria_imagen
      FROM moleculas m
      LEFT JOIN categorias c ON m.categoria_id = c.id
    `; //este es el left join que permite traer la información de la categoría asociada a cada molécula, si es que tiene una categoría asignada.
    const params = [];

    if (categoria_id) {
      query += ' WHERE m.categoria_id = $1';
      params.push(categoria_id);
    }

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const crearMolecula = async (req, res) => {
  try {
    const { nombre, formula, pdb_code, categoria_id } = req.body;
    const result = await pool.query(
      'INSERT INTO moleculas (nombre, formula, pdb_code, categoria_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, formula, pdb_code, categoria_id || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarMolecula = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, formula, pdb_code, categoria_id } = req.body;
    const result = await pool.query(
      'UPDATE moleculas SET nombre = $1, formula = $2, pdb_code = $3, categoria_id = $4 WHERE id = $5 RETURNING *',
      [nombre, formula, pdb_code, categoria_id || null, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Molécula no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } //todo esto es para actualizar una molécula, si no se encuentra la molécula con el id proporcionado, se devuelve un error 404.
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
  } //esto es para eliminar una molécula, si no se encuentra la molécula con el id proporcionado, se devuelve un error 404.
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
}; //esto es para obtener una molécula por su id, si no se encuentra la molécula con el id proporcionado, se devuelve un error 404.

module.exports = { getMoleculas, getMoleculaPorId, crearMolecula, actualizarMolecula, eliminarMolecula };