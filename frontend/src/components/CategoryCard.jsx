function CategoryCard({ title, description, emoji, molecules, color }) {
  return (
    <div className="category-card" style={{ borderColor: color }}>
      <div className="category-icon" style={{ backgroundColor: color }}>
        {emoji}
      </div>
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
  );
}

export default CategoryCard;