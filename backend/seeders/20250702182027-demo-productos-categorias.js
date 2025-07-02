'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Insertar muchas categorías
    const categorias = await queryInterface.bulkInsert('Categoria', [
      { name: 'Tecnología', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hogar', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ropa', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Libros', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alimentos', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juguetes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Salud', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mascotas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Deportes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Herramientas', createdAt: new Date(), updatedAt: new Date() }
    ], { returning: true });

    const categoriasDB = await queryInterface.sequelize.query('SELECT * FROM `Categoria`;');
    const ids = categoriasDB[0];

    // 2. Insertar muchos productos con variedad de precios
    const productos = [];

    for (let i = 0; i < 100; i++) {
      const cat = ids[Math.floor(Math.random() * ids.length)];
      productos.push({
        name: `Producto ${i + 1}`,
        description: `Este es un producto de la categoría ${cat.name}.`,
        price: Math.floor(Math.random() * 5000) + 10, // Precios entre 10 y 5000
        category_id: cat.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Productos', productos);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});
    await queryInterface.bulkDelete('Categoria', null, {});
  }
};
