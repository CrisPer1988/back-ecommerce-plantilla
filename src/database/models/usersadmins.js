'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersAdmins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // UsersAdmins.hasMany(models.Busines, { foreignKey: 'business_id' });
    }
  }
  UsersAdmins.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // busines_id: {
    //   type: DataTypes.UUID,
    //   allowNull: false
    // },
    status: {
      type: DataTypes.ENUM('active', 'disable'),
      defaultValue: 'active',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UsersAdmins',
  });
  return UsersAdmins;
};