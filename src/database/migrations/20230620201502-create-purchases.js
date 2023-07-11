'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Purchases', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        // references:{
        //   model:"users",
        //   key:"id",
        // }
      },
      product_id:{
        type:Sequelize.UUID,
        allowNull:false,
        // references:{
        //   model:"product",
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