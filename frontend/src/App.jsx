import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoleculesPage from './pages/MoleculesPage';
import MoleculeDetailPage from './pages/MoleculeDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moleculas" element={<MoleculesPage />} />
        <Route path="/moleculas/:id" element={<MoleculeDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;