'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Busines_imgs', 'busines_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Busines',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.changeColumn('Busines', 'user_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.changeColumn('product_categories', 'product_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.changeColumn('product_categories', 'category_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.changeColumn('Product_imgs', 'product_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    


    await queryInterface.changeColumn('Purchases', 'user_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.changeColumn('UsersAdmins', 'busines_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Busines',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    //relaciones modificadas
    await queryInterface.changeColumn('Products', 'busines_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Busines',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.changeColumn('Purchases', 'product_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};