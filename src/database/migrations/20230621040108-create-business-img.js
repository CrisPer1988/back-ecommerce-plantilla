'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Busines_imgs', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      busines_id: {
       type:Sequelize.UUID,
       allowNull:false,
      },
      busines_imgUrl: {
         type : Sequelize.STRING,
         allowNull: false,
      } ,
      status: {
        type: Sequelize.ENUM('active', 'disable'),
        defaultValue: 'active',
        allowNull: false,
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
    await queryInterface.dropTable('Busines_imgs');
  }
};