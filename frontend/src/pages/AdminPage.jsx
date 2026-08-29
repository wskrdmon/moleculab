import { useState, useEffect } from 'react';
import { getMoleculas, crearMolecula, actualizarMolecula, eliminarMolecula, getCategorias } from '../services/api';

function AdminPage() {
  const [moleculas, setMoleculas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState('');
  const [formula, setFormula] = useState('');
  const [pdbCode, setPdbCode] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [editNombre, setEditNombre] = useState('');
  const [editFormula, setEditFormula] = useState('');
  const [editPdbCode, setEditPdbCode] = useState('');
  const [editCategoriaId, setEditCategoriaId] = useState('');

  const cargarMoleculas = () => {
    getMoleculas()
      .then((data) => setMoleculas(data))
      .catch((err) => console.error(err));
  };

  const cargarCategorias = () => {
    getCategorias()
      .then((data) => setCategorias(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    cargarMoleculas();
    cargarCategorias();
  }, []);

  const handleCrear = async (e) => {
    e.preventDefault();
    if (!nombre || !formula) return;
    await crearMolecula({
      nombre,
      formula,
      pdb_code: pdbCode || null,
      categoria_id: categoriaId || null,
    });
    setNombre('');
    setFormula('');
    setPdbCode('');
    setCategoriaId('');
    cargarMoleculas();
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Eliminar esta molécula?');
    if (!confirmar) return;
    await eliminarMolecula(id);
    cargarMoleculas();
  };

  const iniciarEdicion = (m) => {
    setEditandoId(m.id);
    setEditNombre(m.nombre);
    setEditFormula(m.formula);
    setEditPdbCode(m.pdb_code || '');
    setEditCategoriaId(m.categoria_id || '');
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
  };

  const guardarEdicion = async (id) => {
    if (!editNombre || !editFormula) return;
    await actualizarMolecula(id, {
      nombre: editNombre,
      formula: editFormula,
      pdb_code: editPdbCode || null,
      categoria_id: editCategoriaId || null,
    });
    setEditandoId(null);
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
        <input
          type="text"
          placeholder="Código PDB (opcional)"
          value={pdbCode}
          onChange={(e) => setPdbCode(e.target.value)}
        />
        <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
          <option value="">Sin categoría</option>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>
        <button type="submit">Agregar molécula</button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fórmula</th>
            <th>Código PDB</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {moleculas.map((m) => (
            <tr key={m.id}>
              {editandoId === m.id ? (
                <>
                  <td>{m.id}</td>
                  <td>
                    <input
                      type="text"
                      value={editNombre}
                      onChange={(e) => setEditNombre(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editFormula}
                      onChange={(e) => setEditFormula(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editPdbCode}
                      onChange={(e) => setEditPdbCode(e.target.value)}
                    />
                  </td>
                  <td>
                    <select value={editCategoriaId} onChange={(e) => setEditCategoriaId(e.target.value)}>
                      <option value="">Sin categoría</option>
                      {categorias.map((c) => (
                        <option key={c.id} value={c.id}>{c.nombre}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button className="save-btn" onClick={() => guardarEdicion(m.id)}>
                      Guardar
                    </button>
                    <button className="cancel-btn" onClick={cancelarEdicion}>
                      Cancelar
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{m.id}</td>
                  <td>{m.nombre}</td>
                  <td>{m.formula}</td>
                  <td>{m.pdb_code || '—'}</td>
                  <td>{m.categoria_nombre || '—'}</td>
                  <td>
                    <button className="edit-btn" onClick={() => iniciarEdicion(m)}>
                      Editar
                    </button>
                    <button className="delete-btn" onClick={() => handleEliminar(m.id)}>
                      Eliminar
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;