import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Catalog from './components/Catalog';
import MoleculeViewer from './components/MoleculeViewer';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Catalog />
      <MoleculeViewer />
    </div>
  );
}

export default App;