import { useEffect, useRef, useState } from 'react';
import * as $3Dmol from '3dmol';

const ESTILOS = {
  stick: { label: 'Barras', style: { stick: {} } },
  sphere: { label: 'Esferas', style: { sphere: {} } },
  cartoon: { label: 'Cartoon', style: { cartoon: { color: 'spectrum' } } },
  line: { label: 'Líneas', style: { line: {} } },
};

function MoleculeViewer({ molecula }) {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);
  const esCodigoDeEjemplo = !molecula?.pdb_code;
  const pdbCode = molecula?.pdb_code || '1CRN';
  const [estiloActivo, setEstiloActivo] = useState('stick');

  useEffect(() => {
    const viewer = $3Dmol.createViewer(viewerRef.current, {
      backgroundColor: 'white',
    });
    viewerInstance.current = viewer;

    $3Dmol.download(`pdb:${pdbCode}`, viewer, {}, () => {
      viewer.setStyle({}, ESTILOS[estiloActivo].style);
      viewer.zoomTo();
      viewer.render();
    });
  }, [pdbCode]);

  useEffect(() => {
    const viewer = viewerInstance.current;
    if (!viewer) return;
    viewer.setStyle({}, ESTILOS[estiloActivo].style);
    viewer.render();
  }, [estiloActivo]);

  return (
    <div className="viewer-section">
      {molecula && (
        <div className="molecule-info">
          <h1>{molecula.nombre}</h1>
          <p className="molecule-formula">{molecula.formula}</p>
        </div>
      )}
      <h2>Vista previa 3D</h2>
      {esCodigoDeEjemplo && (
        <p className="viewer-fallback-note">
          Vista de ejemplo — esta molécula no tiene una estructura PDB asignada todavía.
        </p>
      )}
      <div className="viewer-style-selector">
        {Object.entries(ESTILOS).map(([key, { label }]) => (
          <button
            key={key}
            type="button"
            className={`viewer-style-btn ${estiloActivo === key ? 'active' : ''}`}
            onClick={() => setEstiloActivo(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        ref={viewerRef}
        className="viewer-container"
        style={{ width: '500px', height: '400px', position: 'relative', margin: '0 auto' }}
      />
    </div>
  );
}

export default MoleculeViewer;