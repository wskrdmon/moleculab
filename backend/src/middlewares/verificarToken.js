const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  const token = authHeader.split(' ')[1]; // "Bearer <token>" -> nos quedamos solo con <token>

  if (!token) {
    return res.status(401).json({ error: 'Formato de token inválido' });
  }

  try {
    const datosUsuario = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = datosUsuario; // { id, rol, iat, exp }
    next(); // deja pasar la petición al controller
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;