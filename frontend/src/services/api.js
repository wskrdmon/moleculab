const API_URL = 'http://localhost:3001/api';

export const getMoleculas = async () => {
  const res = await fetch(`${API_URL}/moleculas`);
  return res.json();
};

export const getMoleculaPorId = async (id) => {
  const res = await fetch(`${API_URL}/moleculas/${id}`);
  return res.json();
};