'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ 
    static associate(models) {
      Product_img.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }
  Product_img.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      product_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      product_imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active', 'disabled'),
        allowNull: false,
        defaultValue: 'active',
      },
    },
    {
      sequelize,
      modelName: 'Product_img',
    }
  );
  return Product_img;
};
