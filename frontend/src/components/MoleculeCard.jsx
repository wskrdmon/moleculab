function MoleculeCard({ molecula, onClick }) {
  return (
    <div className="molecule-card" onClick={onClick}>
      <div className="molecule-card-image">🧬</div>
      <div className="molecule-card-content">
        <h3>{molecula.nombre}</h3>
        <p className="molecule-formula">{molecula.formula}</p>
      </div>
    </div>
  );
}

export default MoleculeCard;