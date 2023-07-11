'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Purchases.belongsTo(models.Users, { foreignKey: 'user_id' });
      Purchases.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }
  Purchases.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id:{
      type:DataTypes.UUID,
      allowNull:false,
      // references:{
      //   model:"users",
      //   key:"id",
      // }
    },
    product_id:{
      type:DataTypes.UUID,
      allowNull:false,
      // references:{
      //   model:"product",
      //   key:"id",
      // }
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('active', 'disable'),
      defaultValue: 'active',
    },
  }, {
    sequelize,
    modelName: 'Purchases',
  });
  return Purchases;
};