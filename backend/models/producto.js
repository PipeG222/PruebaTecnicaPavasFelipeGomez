// models/producto.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Producto.associate = function (models) {
    Producto.belongsTo(models.Categoria, {
      foreignKey: 'category_id',
      as: 'categoria'
    });
  };

  return Producto;
};
