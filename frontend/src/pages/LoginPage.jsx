import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

function LoginPage() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await login(correo, password);
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Ingresar a MoleculeLab</h2>
        <p className="login-subtitle">Acceso exclusivo para administradores</p>

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="correo">Correo</label>
            <input
              id="correo"
              type="email"
              placeholder="tu@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;