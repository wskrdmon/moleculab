import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import MoleculesPage from './pages/MoleculesPage';
import MoleculeDetailPage from './pages/MoleculeDetailPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RutaProtegida from './components/RutaProtegida';

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
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <AdminPage />
            </RutaProtegida>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;