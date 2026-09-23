import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMoleculas } from '../services/api';
import MoleculeCard from './MoleculeCard';

function Catalog({ categoriaId }) {
  const [moleculas, setMoleculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    getMoleculas(categoriaId)
      .then((data) => setMoleculas(data))
      .catch((err) => console.error(err));
  }, [categoriaId]);

  const moleculasFiltradas = moleculas.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const categoriaActiva = categoriaId && moleculas.length > 0
    ? moleculas[0].categoria_nombre
    : null;

  return (
    <div id="catalogo" className="catalog">
      <h1>{categoriaActiva ? categoriaActiva : 'Explora Biomoléculas'}</h1>
      <p>Descubre el mundo molecular a través de visualizaciones 3D interactivas</p>

      {categoriaId && (
        <p className="active-filter">
          Mostrando solo esta categoría — <Link to="/moleculas">ver todas las moléculas</Link>
        </p>
      )}

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