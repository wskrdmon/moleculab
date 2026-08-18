-- Schema de la base de datos MoleculeLab 3D
-- Ejecutar en pgAdmin conectado a la base de datos "moleculab"

-- Tabla de moléculas
CREATE TABLE IF NOT EXISTS moleculas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  formula VARCHAR(50),
  pdb_code TEXT
);

-- Datos de prueba (opcional)
INSERT INTO moleculas (nombre, formula, pdb_code) 
VALUES ('ADN', 'C10H14N5O6P', '1BNA')
ON CONFLICT DO NOTHING;