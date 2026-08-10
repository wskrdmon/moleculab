import { useState, useEffect } from 'react';
import { getMoleculas } from '../services/api';
import MoleculeCard from './MoleculeCard';

function Catalog() {
  const [moleculas, setMoleculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    getMoleculas()
      .then((data) => setMoleculas(data))
      .catch((err) => console.error(err));
  }, []);

  const moleculasFiltradas = moleculas.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div id="catalogo" className="catalog">
      <h1>Explora Biomoléculas</h1>
      <p>Descubre el mundo molecular a través de visualizaciones 3D interactivas</p>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input"
      />

      <p className="results-count">
        {moleculasFiltradas.length} molécula(s)
      </p>

      {moleculasFiltradas.length > 0 ? (
        <div className="molecule-grid">
          {moleculasFiltradas.map((molecula) => (
            <MoleculeCard key={molecula.id} molecula={molecula} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No se encontraron moléculas</h3>
          <p>Intenta con otros términos de búsqueda</p>
          <button onClick={() => setBusqueda('')} className="clear-button">
            Limpiar búsqueda
          </button>
        </div>
      )}
    </div>
  );
}

export default Catalog;