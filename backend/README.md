markdown
# MoleculeLab 3D

Plataforma educativa web para visualización interactiva de biomoléculas en 3D, orientada a estudiantes de educación básica y media.

## Integrantes
- Kevin Flores
- Elías Necul

## Profesores guía
- David Castro
- Matías Zúñiga

## Stack tecnológico
- **Frontend:** React + Vite + React Router + 3Dmol.js
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
├── components/ # Componentes reutilizables (Navbar, Footer, Hero, tarjetas, visor 3D)
├── pages/ # Páginas navegables (Home, Categorías, Moléculas, Detalle, Nosotros)
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

| Método | Ruta                    | Descripción                       |
|--------|-------------------------|------------------------------------|
| GET    | `/api/moleculas`        | Lista todas las moléculas          |
| GET    | `/api/moleculas/:id`    | Obtiene una molécula por su id     |
| POST   | `/api/moleculas`        | Crea una molécula nueva            |
| PUT    | `/api/moleculas/:id`    | Actualiza una molécula existente   |
| DELETE | `/api/moleculas/:id`    | Elimina una molécula               |

## Páginas disponibles (frontend)

| Ruta                | Descripción                                  |
|----------------------|-----------------------------------------------|
| `/`                  | Inicio — Hero con visor 3D, categorías destacadas |
| `/categorias`        | Listado de categorías con buscador           |
| `/moleculas`         | Catálogo de moléculas con buscador           |
| `/moleculas/:id`     | Detalle de una molécula (nombre, fórmula, visor 3D) |
| `/acerca-de`         | Información del proyecto y stack tecnológico |

## Diseño

El diseño visual está basado en el prototipo de Figma del equipo, pero recreado con React + CSS plano, sin librerías de UI adicionales (Tailwind, Radix, MUI, etc.), para mantener coherencia con el stack tecnológico definido en TT1.

## Estado actual
Prototipo funcional con navegación real entre páginas (React Router). El frontend consulta datos reales desde PostgreSQL a través del backend en el catálogo y el detalle de cada molécula, y renderiza modelos moleculares en 3D usando 3Dmol.js. El backend expone un CRUD completo (crear, leer, actualizar, eliminar, y obtener por id) sobre la tabla `moleculas`, probado con Thunder Client.

### Pendiente
- Agregar columnas `categoria`, `descripcion` y `pdb_id` a la tabla `moleculas` para habilitar filtros por categoría, descripciones detalladas, y que el visor 3D muestre la estructura real de cada molécula (actualmente muestra una molécula de prueba fija).
- Autenticación de usuarios (admin / docente / estudiante).
- Panel de administración funcional desde la interfaz.