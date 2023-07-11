'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Busines_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Busines_img.belongsTo(models.Busines, { foreignKey: 'busines_id' });
    }
  }
  Busines_img.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    busines_id: {
     type:DataTypes.UUID,
     allowNull:false,
    },
    busines_imgUrl: {
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
    modelName: 'Busines_img',
  });
  return Busines_img;
};