# 🛍️ Gestor de Productos y Categorías

Este proyecto es una aplicación web completa desarrollada con **React.js** en el frontend y **Node.js + Express + Sequelize** en el backend, conectada a una base de datos **MySQL**. Permite realizar operaciones CRUD tanto para productos como para categorías, manteniendo relaciones entre ambos. Fue construido como parte de una prueba técnica.

---

## 🚀 Tecnologías Usadas

### 🖥 Backend:
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- dotenv
- cors

### 🌐 Frontend:
- React.js
- React Router DOM
- Axios
- Bootstrap (estilizado)
- Validaciones en formularios

---

## 🧱 Estructura del Proyecto

```plaintext
gestor-productos/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── app.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
└── README.md

⚙️ Instalación y Ejecución
📦 1. Clonar el repositorio
git clone https://github.com/tu-usuario/gestor-productos.git
cd gestor-productos
🖥 2. Backend
cd backend
npm install
cp .env.example .env
# Edita el archivo .env con tu configuración de MySQL:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=tu_clave
# DB_NAME=gestor_productos
# DB_PORT=3306
# PORT=3001

# Inicia el servidor con nodemon:
npx nodemon app.js
Esto iniciará el servidor en: http://localhost:3001

🌐 3. Frontend

cd ../frontend
npm install
npm run dev

Esto levantará la app React en: http://localhost:3000

📌 Funcionalidades
✅ Gestión de productos (crear, listar, editar, eliminar)
✅ Gestión de categorías (crear, listar, editar, eliminar)
✅ Asociación de productos a una categoría
✅ Validaciones de formularios (campos requeridos, tipos de datos)
✅ Navegación entre vistas usando React Router
✅ Llamadas HTTP usando Axios
✅ Estructura limpia y mantenible

📎 Endpoints del Backend
Categorías
GET /categories

GET /categories/:id

POST /categories

PUT /categories/:id

DELETE /categories/:id

Productos
GET /products

GET /products/:id

POST /products

PUT /products/:id

DELETE /products/:id

📚 Recursos y Consideraciones
El ORM Sequelize maneja las relaciones entre modelos (Producto → Categoría).

Las rutas están organizadas en módulos separados.

El proyecto fue construido siguiendo buenas prácticas de estructura y modularidad.

🤝 Licencia
Este proyecto fue desarrollado como parte de una prueba técnica. Puedes usarlo como referencia para aprendizaje o mejorar tus habilidades fullstack.
