import { useEffect, useRef } from 'react';
import * as $3Dmol from '3dmol';

function MoleculeViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = $3Dmol.createViewer(viewerRef.current, {
      backgroundColor: 'white',
    });

    $3Dmol.download('pdb:1CRN', viewer, {}, () => {
      viewer.setStyle({}, { stick: {} });
      viewer.zoomTo();
      viewer.render();
    });
  }, []);

  return (
    <div className="viewer-section">
      <h2>Vista previa 3D</h2>
      <div
        ref={viewerRef}
        className="viewer-container"
        style={{ width: '500px', height: '400px', position: 'relative', margin: '0 auto' }}
      />
    </div>
  );
}

export default MoleculeViewer;