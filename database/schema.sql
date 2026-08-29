-- Schema de la base de datos MoleculeLab 3D
-- Ejecutar en pgAdmin conectado a la base de datos "moleculab"

-- Tabla de categorías
CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  color VARCHAR(20),
  imagen TEXT
);

-- Tabla de moléculas
CREATE TABLE IF NOT EXISTS moleculas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  formula VARCHAR(50),
  pdb_code TEXT,
  categoria_id INTEGER REFERENCES categorias(id)
);

-- Datos de categorías
INSERT INTO categorias (nombre, descripcion, color, imagen) VALUES
('Moléculas de la vida', 'Biomoléculas esenciales para los procesos vitales', '#2563EB', 'vida.jpg'),
('Moléculas de la sensación', 'Neurotransmisores y moléculas que afectan nuestras emociones', '#06B6D4', 'sensacion.jpg'),
('Moléculas que curan y enferman', 'Fármacos, medicamentos y agentes patógenos', '#8B5CF6', 'cura-enferma.jpg'),
('Nanomoléculas y mundo invisible', 'Estructuras nanométricas y moléculas complejas', '#10B981', 'nano.jpg')
ON CONFLICT DO NOTHING;

-- Datos de moléculas de ejemplo (una por categoría, con código PDB real verificado)
INSERT INTO moleculas (nombre, formula, pdb_code, categoria_id) VALUES
('ADN', 'C10H14N5O6P', '1BNA', 1),
('Dopamina', 'C8H11NO2', '3PBL', 2),
('SARS-CoV-2', 'Glicoproteína (trímero)', '6VXX', 3),
('Ferritina', 'Proteína (24 subunidades)', '1FHA', 4)
ON CONFLICT DO NOTHING;