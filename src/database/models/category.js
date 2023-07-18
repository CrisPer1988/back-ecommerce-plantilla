'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate(models) {
      Category.hasMany(models.product_category, { foreignKey: 'category_id' });
    }
  }
  Category.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name:{
       type : DataTypes.STRING,
       allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'disable'),
      defaultValue: 'active',
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};