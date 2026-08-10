import Hero from './Hero';
import CategoryCard from './CategoryCard';

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

function HomePage() {
  return (
    <div>
      <div id="inicio">
        <Hero />
      </div>

      <section id="categorias" className="categories-section">
        <h2>Categorías de Biomoléculas</h2>
        <p>Explora diferentes tipos de moléculas organizadas por su función biológica y características</p>

        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="why-section">
        <h2>¿Por qué MoleculeLab 3D?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🧬</div>
            <h3>Interactivo</h3>
            <p>Rota, amplía y explora cada molécula en tiempo real</p>
          </div>
          <div className="why-card">
            <div className="why-icon">❤️</div>
            <h3>Educativo</h3>
            <p>Información detallada de cada molécula y su función</p>
          </div>
          <div className="why-card">
            <div className="why-icon">⚛️</div>
            <h3>Científico</h3>
            <p>Modelos precisos basados en datos científicos reales</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;