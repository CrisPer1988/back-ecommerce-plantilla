'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Busines, { foreignKey: 'busines_id' });
      Products.hasMany(models.Product_img, { foreignKey: 'product_id' });
      Products.hasMany(models.Purchases, { foreignKey: 'product_id' });
      Products.hasMany(models.product_category, { foreignKey: 'product_id' });
    }
  }
  Products.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    busines_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'disable'),
      defaultValue: 'active',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};