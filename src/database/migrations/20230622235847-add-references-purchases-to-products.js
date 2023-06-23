'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.changeColumn('Purchases', "product_Id", {
        type:Sequelize.INTEGER,
        allowNull:false,
         references:{
           model:"products",
           key:"id",
         }
        });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Purchases', "product_Id", {
      type:Sequelize.INTEGER,
      defaultValue:2,
      allowNull:false,
      // references:{
      //   model:"products",
      //   key:"id",
      // }
       
      });
  }
};
