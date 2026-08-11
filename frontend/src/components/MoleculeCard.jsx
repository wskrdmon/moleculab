import { Link } from 'react-router-dom';

function MoleculeCard({ molecula }) {
  return (
    <Link to={`/moleculas/${molecula.id}`} className="molecule-card">
      <div className="molecule-card-image">🧬</div>
      <div className="molecule-card-content">
        <h3>{molecula.nombre}</h3>
        <p className="molecule-formula">{molecula.formula}</p>
      </div>
    </Link>
  );
}

export default MoleculeCard;