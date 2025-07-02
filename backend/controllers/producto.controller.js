// controllers/producto.controller.js
const { Producto, Categoria } = require('../models');

// GET /products
exports.getAll = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: {
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'name']
      }
    });
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// GET /products/:id
exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByPk(id, {
      include: {
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'name']
      }
    });

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// POST /products
exports.create = async (req, res) => {
  const { name, description, price, category_id } = req.body;

  if (!name || !description || !price || !category_id) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const nuevo = await Producto.create({ name, description, price, category_id });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error interno al crear el producto' });
  }
};

// PUT /products/:id
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category_id } = req.body;

  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    producto.name = name || producto.name;
    producto.description = description || producto.description;
    producto.price = price || producto.price;
    producto.category_id = category_id || producto.category_id;

    await producto.save();

    res.json(producto);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error interno al actualizar el producto' });
  }
};

// DELETE /products/:id
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    await producto.destroy();
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error interno al eliminar el producto' });
  }
};
