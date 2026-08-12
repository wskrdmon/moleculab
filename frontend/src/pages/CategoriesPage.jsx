import { useState } from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    title: 'Moléculas de la vida',
    description: 'Biomoléculas esenciales para los procesos vitales',
    emoji: '🧬',
    molecules: ['ADN', 'ARN', 'ATP'],
    color: '#2563EB',
  },
  {
    title: 'Moléculas de la sensación',
    description: 'Neurotransmisores y moléculas que afectan nuestras emociones',
    emoji: '❤️',
    molecules: ['Dopamina', 'Serotonina', 'Capsaicina'],
    color: '#06B6D4',
  },
  {
    title: 'Moléculas que curan y enferman',
    description: 'Fármacos, medicamentos y agentes patógenos',
    emoji: '💊',
    molecules: ['Aspirina', 'Penicilina', 'SARS-CoV-2'],
    color: '#8B5CF6',
  },
  {
    title: 'Nanomoléculas y mundo invisible',
    description: 'Estructuras nanométricas y moléculas complejas',
    emoji: '⚛️',
    molecules: ['Ferritina', 'Nanotubos', 'Liposomas'],
    color: '#10B981',
  },
];

function CategoriesPage() {
  const [busqueda, setBusqueda] = useState('');

  const categoriasFiltradas = categories.filter((c) =>
    c.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="categories-section">
      <h2>Categorías de Biomoléculas</h2>
      <p>Explora diferentes tipos de moléculas organizadas por su función biológica y características</p>

      <input
        type="text"
        placeholder="Buscar categorías..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input"
      />

      <div className="category-grid">
        {categoriasFiltradas.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;