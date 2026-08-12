import { useEffect, useRef } from 'react';
import * as $3Dmol from '3dmol';
import { Link } from 'react-router-dom';

function Hero() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = $3Dmol.createViewer(viewerRef.current, {
      backgroundColor: '#1e293b',
    });

    $3Dmol.download('pdb:1CRN', viewer, {}, () => {
      viewer.setStyle({}, { stick: { colorscheme: 'greenCarbon' } });
      viewer.zoomTo();
      viewer.render();
      viewer.spin(true);
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <span className="hero-badge">✨ Plataforma Educativa de Biomoléculas</span>
        <h1>Explora biomoléculas en 3D</h1>
        <p>
          Descubre el mundo invisible de las moléculas con modelos
          tridimensionales interactivos. Aprende bioquímica de forma
          visual e intuitiva.
        </p>
        <div className="hero-buttons">
          <Link to="/moleculas" className="btn-primary">Explorar moléculas →</Link>
          <a href="#categorias" className="btn-secondary">Ver categorías</a>
        </div>
      </div>
      <div className="hero-image" ref={viewerRef}></div>
    </section>
  );
}

export default Hero;