'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Busines extends Model {
    static associate(models) {
      Busines.belongsTo(models.Users, { foreignKey: 'user_id' });
      Busines.belongsTo(models.UsersAdmins, { foreignKey: 'userAd_id' });
      Busines.hasMany(models.Products, { foreignKey: 'busines_id' });
      Busines.hasMany(models.Busines_img, { foreignKey: 'busines_id' });
    }
  }
  Busines.init(
    {
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userAd_id:{
        type: DataTypes.UUID,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('active', 'disable'),
        defaultValue: 'active',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Busines',
    }
  );
  return Busines;
};
