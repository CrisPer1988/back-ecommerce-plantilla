'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business_img.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    business_id: {
     type:DataTypes.INTEGER,
     allowNull:false,
    },
    business_imgUrl: {
       type : DataTypes.STRING,
       allowNull: false,
    } ,
    status: {
      type: DataTypes.ENUM('active', 'disable'),
      defaultValue: 'active',
      allowNull: false,
    }
  },
  
   {
    sequelize,
    modelName: 'Business_img',
  });
  return Business_img;
};