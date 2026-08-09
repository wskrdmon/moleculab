import { useState, useEffect } from 'react';
import { getMoleculas } from './services/api';
import MoleculeViewer from './components/MoleculeViewer';

function App() {
  const [molecula, setMolecula] = useState('Cargando...');

  useEffect(() => {
    getMoleculas()
      .then((data) => setMolecula(data[0].nombre))
      .catch((err) => setMolecula('Error: ' + err.message));
  }, []);

  return (
    <div>
      <h1>MoleculeLab 3D</h1>
      <p>Molécula desde la base de datos: {molecula}</p>
      <MoleculeViewer />
    </div>
  );
}

export default App;