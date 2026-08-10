function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MoleculeLab 3D</div>
      <div className="navbar-links">
        <button onClick={() => scrollTo('inicio')}>Inicio</button>
        <button onClick={() => scrollTo('categorias')}>Categorías</button>
        <button onClick={() => scrollTo('catalogo')}>Moléculas</button>
      </div>
    </nav>
  );
}

export default Navbar;