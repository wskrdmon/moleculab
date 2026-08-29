import { Link } from 'react-router-dom';
import imgVida from '../assets/categories/vida.jpg';
import imgSensacion from '../assets/categories/sensacion.jpg';
import imgCuraEnferma from '../assets/categories/cura-enferma.jpg';
import imgNano from '../assets/categories/nano.jpg';

const IMAGENES_CATEGORIA = {
  'vida.jpg': imgVida,
  'sensacion.jpg': imgSensacion,
  'cura-enferma.jpg': imgCuraEnferma,
  'nano.jpg': imgNano,
};

function MoleculeCard({ molecula }) {
  const imagenFondo = IMAGENES_CATEGORIA[molecula.categoria_imagen];

  return (
    <Link to={`/moleculas/${molecula.id}`} className="molecule-card">
      <div
        className="molecule-card-image"
        style={
          imagenFondo
            ? { backgroundImage: `url(${imagenFondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : {}
        }
      >
        {!imagenFondo && '🧬'}
      </div>
      <div className="molecule-card-content">
        <h3>{molecula.nombre}</h3>
        <p className="molecule-formula">{molecula.formula}</p>
      </div>
    </Link>
  );
}

export default MoleculeCard;