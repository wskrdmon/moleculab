function CategoryCard({ title, description, emoji, molecules, color }) {
  return (
    <div className="category-card">
      <div
        className="category-image"
        style={{ background: `linear-gradient(135deg, ${color}, #0f172a)` }}
      >
        <div className="category-icon-float" style={{ backgroundColor: color }}>
          {emoji}
        </div>
      </div>
      <div className="category-body" style={{ borderColor: color }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="category-label">Moléculas incluidas:</span>
        <div className="category-molecules">
          {molecules.map((m) => (
            <span key={m} className="category-tag">{m}</span>
          ))}
        </div>
        <a href="#catalogo" className="category-link">Ver moléculas →</a>
      </div>
    </div>
  );
}

export default CategoryCard;