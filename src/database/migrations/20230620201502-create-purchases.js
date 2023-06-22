'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Purchases', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      user_Id:{
        type:Sequelize.INTEGER,
        defaultValue:2,
        allowNull:false,
        // references:{
        //   model:"users",
        //   key:"id",
        // }
      },
      product_Id:{
        type:Sequelize.INTEGER,
        defaultValue:2,
        allowNull:false,
        // references:{
        //   model:"products",
        //   key:"id",
        // }
      },
      totalPrice:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      quantity:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('active','disable'),
        defaultValue:'active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Purchases');
  }
};