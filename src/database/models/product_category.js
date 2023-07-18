'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_category.belongsTo(models.Products, { foreignKey: 'product_id' });
      product_category.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });
    }
  }
  product_category.init(
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

      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM('active', 'disable'),
        defaultValue: 'active',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'product_category',
    }
  );
  return product_category;
};
