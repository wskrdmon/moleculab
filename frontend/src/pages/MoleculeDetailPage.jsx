import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  return <MoleculeViewer molecula={molecula} />;
}

export default MoleculeDetailPage;