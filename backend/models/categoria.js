// models/categoria.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Producto, {
      foreignKey: 'category_id',
      as: 'productos',
      onDelete: 'CASCADE'
    });
  };

  return Categoria;
};
