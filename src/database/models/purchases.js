'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Purchases.belongsTo(models.Users, { foreignKey: 'user_Id' });
      Purchases.hasMany(models.Products, { foreignKey: 'product_Id' });
    }
  }
  Purchases.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM('active', 'disable'),
        defaultValue: 'active',
      },
    },
    {
      sequelize,
      modelName: 'Purchases',
    }
  );
  return Purchases;
};
