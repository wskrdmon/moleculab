import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">MoleculeLab 3D</Link>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/categorias">Categorías</Link>
        <Link to="/moleculas">Moléculas</Link>
        <Link to="/acerca-de">Nosotros</Link>
      </div>
    </nav>
  );
}

export default Navbar;