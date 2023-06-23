'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn('product_categories',"product_id", { 
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "products",
            key: "id"
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE"
       });
     
  },

  async down (queryInterface, Sequelize) { 
     await queryInterface.changeColumn('product_categories',"product_id", { 
      type: Sequelize.INTEGER,
        allowNull: false,
     });
   ;
     
  }
};
