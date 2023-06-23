'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn('product_categories', "category_id", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
        });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('product_categories', "category_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
});
     
  }
};
