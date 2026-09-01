import { Link } from 'react-router-dom';

function CategoryCard({ id, title, description, emoji, molecules, color, image }) {
  return (
    <Link to={`/moleculas?categoria=${id}`} className="category-card">
      <div
        className="category-image"
        style={
          image
            ? { backgroundImage: `url(${image})` }
            : { background: `linear-gradient(135deg, ${color}, #0f172a)` }
        }
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
      </div>
    </Link>
  );
}

export default CategoryCard;