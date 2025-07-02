# 🧮 Gestor de Productos y Categorías

Aplicación web fullstack construida como prueba técnica, que permite gestionar productos y categorías con funcionalidades completas de CRUD, validaciones, autenticación y visualización de datos.

Está desarrollada con **React.js** (frontend) y **Node.js + Express + Sequelize** (backend), conectada a una base de datos **MySQL**. Además, incluye autenticación JWT, dashboards con gráficas y diseño responsive con Bootstrap.

---

## 🚀 Tecnologías Usadas

### 🖥 Backend:
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT (autenticación)
- dotenv
- cors

### 🌐 Frontend:
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- Chart.js (dashboard)

---

## 🧱 Estructura del Proyecto

```plaintext
PRUEBATECNICAPAVASFELIPEGOMEZ/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── seeders/
│ ├── .env
│ └── app.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── auth/
│ │ │ ├── admin/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
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
---
Pruebas Fotograficas
![image](https://github.com/user-attachments/assets/a66ab27c-414b-4868-b1b9-a50d226beb4e)
![image](https://github.com/user-attachments/assets/bac3852d-aa8a-4c07-87dc-0c2f95f93428)
![image](https://github.com/user-attachments/assets/e5e2ee9d-8697-48c2-9c57-107b6475da32)
![image](https://github.com/user-attachments/assets/f529a63a-6924-44d8-b258-770e8f36c289)




