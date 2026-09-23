require('dotenv').config(); //carga las variables de entorno desde el archivo .env
const { Pool } = require('pg');

const pool = new Pool({  //elegimos pool para manejar múltiples conexiones a la base de datos
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;