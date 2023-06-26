'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'reloj',
          description: 'da la hora',
          price: 25,
          stock: 10,
          business_id: 1,
          brand: 'Cassio',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Lavarropa',
          description: 'lava la ropa',
          price: 80,
          stock: 18,
          business_id: 2,
          brand: 'Aurora',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Televisor',
          description: 'Para ver series',
          price: 50,
          stock: 25,
          business_id: 3,
          brand: 'Samsung',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
