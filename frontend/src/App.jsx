import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import MoleculesPage from './pages/MoleculesPage';
import MoleculeDetailPage from './pages/MoleculeDetailPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/moleculas" element={<MoleculesPage />} />
        <Route path="/moleculas/:id" element={<MoleculeDetailPage />} />
        <Route path="/acerca-de" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;