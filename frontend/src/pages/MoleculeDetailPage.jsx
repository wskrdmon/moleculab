import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMoleculaPorId } from '../services/api';
import MoleculeViewer from '../components/MoleculeViewer';

function MoleculeDetailPage() {
  const { id } = useParams();
  const [molecula, setMolecula] = useState(null);

  useEffect(() => {
    getMoleculaPorId(id)
      .then((data) => setMolecula(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
  <div>
    <div className="back-link">
      <Link to="/moleculas" className="btn-secondary">← Volver a Moléculas</Link>
    </div>
    <MoleculeViewer molecula={molecula} />
  </div>
);
}

export default MoleculeDetailPage;