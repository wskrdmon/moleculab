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
- **Base de datos:** PostgreSQL (alojado en Supabase)

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


## Base de datos: Supabase

El proyecto usa una base de datos PostgreSQL compartida, alojada en Supabase, en vez de instancias locales separadas — así ambos integrantes trabajan sobre los mismos datos en tiempo real.

> **Importante:** el archivo `.env` con las credenciales NUNCA se sube a Git (está en `.gitignore`). Cada integrante debe tener su propio archivo `.env` local con las credenciales del proyecto de Supabase.

Para obtener las credenciales:
1. Debes tener acceso a la organización de Supabase del proyecto (invitación por correo).
2. Entra al proyecto en [supabase.com](https://supabase.com/dashboard), haz clic en **Connect** (arriba).
3. Selecciona el método **Session pooler** (evita problemas de conexión IPv6 en redes locales).
4. Copia el host, usuario, contraseña y puerto para tu `.env`.

## Cómo levantar el proyecto

### 1. Clonar el repositorio

git clone https://github.com/wskrdmon/moleculab.git


### 2. Backend

cd backend
npm install


Crear un archivo `.env` propio dentro de `backend` (no viene incluido en el repositorio) con las credenciales de Supabase:

DB_USER=postgres.xxxxxxxxxxxx
DB_HOST=aws-0-us-east-1.pooler.supabase.com
DB_NAME=postgres
DB_PASSWORD=tu_contraseña_de_supabase
DB_PORT=5432


(Reemplaza los valores con los datos reales del proyecto — ver sección "Base de datos: Supabase" arriba).

Luego levantar el servidor:

node index.js


El backend queda disponible en `http://localhost:3001`.

### 3. Frontend

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
| `/admin`             | Panel de administración (crear y eliminar moléculas) |

## Diseño

El diseño visual está basado en el prototipo de Figma del equipo, pero recreado con React + CSS plano, sin librerías de UI adicionales (Tailwind, Radix, MUI, etc.), para mantener coherencia con el stack tecnológico definido en TT1.

## Estado actual
Prototipo funcional con navegación real entre páginas (React Router), backend con CRUD completo, y base de datos compartida en Supabase. El frontend consulta datos reales a través del backend en el catálogo, el detalle de cada molécula y el panel de administración, y renderiza modelos moleculares en 3D usando 3Dmol.js.

### Pendiente
- Agregar columnas `categoria`, `descripcion` y `pdb_id` a la tabla `moleculas` para habilitar filtros por categoría, descripciones detalladas, y que el visor 3D muestre la estructura real de cada molécula (actualmente muestra una molécula de prueba fija).
- Autenticación de usuarios (admin / docente / estudiante).