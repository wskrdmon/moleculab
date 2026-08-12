function AboutPage() {
  return (
    <div className="about-section">
      <h2>Acerca de</h2>
      <p className="about-subtitle">
        Una plataforma educativa innovadora para la visualización interactiva
        de biomoléculas en 3D
      </p>

      <div className="about-mission">
        <h3>Nuestra Misión</h3>
        <p>
          MoleculeLab 3D tiene como objetivo hacer que la bioquímica y la
          biología molecular sean más accesibles y comprensibles para
          estudiantes y docentes de educación básica y secundaria. A través
          de visualizaciones 3D interactivas, permitimos que los usuarios
          exploren el mundo invisible de las moléculas de una manera
          intuitiva y educativa.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon" style={{ backgroundColor: '#2563EB' }}>🧬</div>
          <h4>Tecnología 3D</h4>
          <p>Utilizamos 3Dmol.js y tecnologías web modernas para crear visualizaciones moleculares precisas y de alta calidad.</p>
        </div>

        <div className="about-card">
          <div className="about-icon" style={{ backgroundColor: '#06B6D4' }}>📖</div>
          <h4>Contenido Educativo</h4>
          <p>Cada molécula incluye información científica detallada, funciones biológicas y características estructurales.</p>
        </div>

        <div className="about-card">
          <div className="about-icon" style={{ backgroundColor: '#EC4899' }}>👥</div>
          <h4>Acceso Universal</h4>
          <p>Plataforma 100% gratuita y accesible desde cualquier navegador web moderno, sin necesidad de instalación.</p>
        </div>

        <div className="about-card">
          <div className="about-icon" style={{ backgroundColor: '#10B981' }}>⚡</div>
          <h4>Interactividad Total</h4>
          <p>Rota, amplía y explora cada molécula desde diferentes ángulos para una comprensión completa de su estructura.</p>
        </div>
      </div>

      <div className="about-stack">
        <h3>Stack Tecnológico</h3>
        <div className="stack-columns">
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>React 18</li>
              <li>React Router</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h4>Backend &amp; Datos</h4>
            <ul>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>3Dmol.js (Visualización)</li>
              <li>PDB Database</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-footer-note">
        <h3>Proyecto Educativo</h3>
        <p>MoleculeLab 3D es un proyecto universitario desarrollado con fines educativos.</p>
      </div>
    </div>
  );
}

export default AboutPage;