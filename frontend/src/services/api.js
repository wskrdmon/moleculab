const API_URL = 'http://localhost:3001/api';

export const getMoleculas = async () => {
  const res = await fetch(`${API_URL}/moleculas`);
  return res.json();
};

export const getMoleculaPorId = async (id) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`);
  return res.json();
};

export const crearMolecula = async (datos) => {
  const res = await fetch(`${API_URL}/moleculas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  return res.json();
};

export const actualizarMolecula = async (id, datos) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  return res.json();
};

export const eliminarMolecula = async (id) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};