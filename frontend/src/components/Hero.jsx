function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">✨ Plataforma Educativa de Biomoléculas</span>
      <h1>Explora biomoléculas en 3D</h1>
      <p>
        Descubre el mundo invisible de las moléculas con modelos
        tridimensionales interactivos. Aprende bioquímica de forma
        visual e intuitiva.
      </p>
      <div className="hero-buttons">
        <a href="#categorias" className="btn-primary">Explorar moléculas →</a>
        <a href="#categorias" className="btn-secondary">Ver categorías</a>
      </div>
    </section>
  );
}

export default Hero;