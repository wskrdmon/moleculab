function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>MoleculeLab 3D</h4>
          <p>Plataforma educativa de visualización molecular 3D para estudiantes y docentes.</p>
        </div>

        <div className="footer-column">
          <h4>Navegación</h4>
          <a href="#inicio">Inicio</a>
          <a href="#categorias">Categorías</a>
          <a href="#catalogo">Moléculas</a>
          <a href="#">Acerca de</a>
        </div>

        <div className="footer-column">
          <h4>Tecnologías</h4>
          <span>React 18</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>3Dmol.js</span>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <div className="footer-icons">
            <a href="#" className="footer-icon">🐙</a>
            <a href="#" className="footer-icon">🐦</a>
            <a href="#" className="footer-icon">✉️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MoleculeLab 3D. Proyecto educativo universitario.
      </div>
    </footer>
  );
}

export default Footer;