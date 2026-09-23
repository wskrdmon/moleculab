const pool = require('../config/db');  //esto es para importar la configuración de la base de datos y poder ejecutar consultas SQL en la base de datos PostgreSQL.

const getCategorias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categorias ORDER BY id');  //trae todas las categorías de la tabla "categorias" y las ordena por el campo "id"
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategoriaPorId = async (req, res) => {
  try {
    const { id } = req.params;  //extrae la id por url params, que es el identificador de la categoría que se quiere obtener
    const result = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]); //busca solo la categoría que tenga el id que se pasó por parámetro, usando una consulta SQL parametrizada para evitar inyecciones SQL
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCategorias, getCategoriaPorId };