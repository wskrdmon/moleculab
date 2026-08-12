import { useState, useEffect } from 'react';
import { getMoleculas, crearMolecula, eliminarMolecula } from '../services/api';

function AdminPage() {
  const [moleculas, setMoleculas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [formula, setFormula] = useState('');

  const cargarMoleculas = () => {
    getMoleculas()
      .then((data) => setMoleculas(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    cargarMoleculas();
  }, []);

  const handleCrear = async (e) => {
    e.preventDefault();
    if (!nombre || !formula) return;
    await crearMolecula({ nombre, formula });
    setNombre('');
    setFormula('');
    cargarMoleculas();
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Eliminar esta molécula?');
    if (!confirmar) return;
    await eliminarMolecula(id);
    cargarMoleculas();
  };

  return (
    <div className="admin-section">
      <h2>Panel de Administración</h2>

      <form className="admin-form" onSubmit={handleCrear}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fórmula"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
        />
        <button type="submit">Agregar molécula</button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fórmula</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {moleculas.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nombre}</td>
              <td>{m.formula}</td>
              <td>
                <button className="delete-btn" onClick={() => handleEliminar(m.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;