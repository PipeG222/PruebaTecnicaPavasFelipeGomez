const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
const categoriaRoutes = require('./routes/categorias.routes');
const productoRoutes = require('./routes/producto.routes');

app.use('/api/categorias', categoriaRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});
