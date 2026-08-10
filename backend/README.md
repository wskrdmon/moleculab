# MoleculeLab 3D

Plataforma educativa web para visualización interactiva de biomoléculas en 3D, orientada a estudiantes de educación básica y media.

## Integrantes
- Kevin Flores
- Elías Necul

## Profesores guía
- David Castro
- Matías Zúñiga

## Stack tecnológico
- **Frontend:** React + Vite + 3Dmol.js
- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL

## Estructura del proyecto

moleculab/
├── backend/
│ ├── src/
│ │ ├── config/ # Conexión a la base de datos
│ │ ├── controllers/ # Lógica de negocio
│ │ └── routes/ # Definición de endpoints
│ ├── .env # Variables de entorno (no se sube a git)
│ └── index.js
└── frontend/
└── src/
├── components/ # Componentes reutilizables (ej. visor 3D)
└── services/ # Llamadas al backend


## Cómo levantar el proyecto

> **Importante:** cada integrante necesita su propia base de datos PostgreSQL local y su propio archivo `.env`. Estos NO se comparten ni se suben a Git — solo se comparte el código.

### 1. Clonar el repositorio

git clone https://github.com/wskrdmon/moleculab.git


### 2. Backend

cd backend
npm install


Crear un archivo `.env` propio dentro de `backend` (no viene incluido en el repositorio) con:

DB_USER=postgres
DB_HOST=localhost
DB_NAME=moleculab
DB_PASSWORD=postgres
DB_PORT=5432


Ajusta `DB_PASSWORD` con la contraseña que hayas definido en tu propia instalación de PostgreSQL.

Luego levantar el servidor:

node index.js


El backend queda disponible en `http://localhost:3001`.

### 3. Base de datos

Crear en tu PostgreSQL local una base de datos llamada `moleculab`, y dentro de ella la tabla de prueba:

```sql
CREATE TABLE moleculas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  formula VARCHAR(50)
);

INSERT INTO moleculas (nombre, formula) VALUES ('ADN', 'C10H14N5O6P');
```

### 4. Frontend

En otra terminal:

cd frontend
npm install
npm run dev


El frontend queda disponible en `http://localhost:5173`.

## Endpoints disponibles (backend)

| Método | Ruta                    | Descripción                  |
|--------|-------------------------|-------------------------------|
| GET    | `/api/moleculas`        | Lista todas las moléculas     |
| POST   | `/api/moleculas`        | Crea una molécula nueva       |
| PUT    | `/api/moleculas/:id`    | Actualiza una molécula existente |
| DELETE | `/api/moleculas/:id`    | Elimina una molécula          |

## Estado actual
Prototipo funcional ("hola mundo") que valida la conexión completa entre las tres capas: el frontend consulta datos reales desde PostgreSQL a través del backend, y renderiza una molécula de prueba en 3D usando 3Dmol.js. El backend expone un CRUD completo (crear, leer, actualizar, eliminar) sobre la tabla `moleculas`, probado con Thunder Client.