const API_URL = 'http://localhost:3001/api';

// --- Helper: arma el header Authorization si hay un token guardado ---
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// --- Auth ---
export const login = async (correo, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, password }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Error al iniciar sesión');
  }
  return res.json(); // { token }
};

export const getMoleculas = async (categoriaId) => {
  const url = categoriaId ? `${API_URL}/moleculas?categoria_id=${categoriaId}` : `${API_URL}/moleculas`;
  const res = await fetch(url);
  return res.json();
};

export const getMoleculaPorId = async (id) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`);
  return res.json();
};

export const crearMolecula = async (datos) => {
  const res = await fetch(`${API_URL}/moleculas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(datos),
  });
  return res.json();
};

export const actualizarMolecula = async (id, datos) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(datos),
  });
  return res.json();
};

export const eliminarMolecula = async (id) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`, {
    method: 'DELETE',
    headers: { ...getAuthHeaders() },
  });
  return res.json();
};

export const getCategorias = async () => {
  const res = await fetch(`${API_URL}/categorias`);
  return res.json();
};