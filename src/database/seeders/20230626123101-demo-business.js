'use strict';
const moment = require("moment")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Businesses', 
      [
        {
        name: 'Derian Relojes',
        address: "Calle sin nombre 123",
        user_id: 1,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
      {
        name: 'Cristian Pollo',
        address: "San Martin 850",
        user_id: 2,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
      {
        name: 'Alex Milanesas',
        address: "Moreno 976",
        user_id: 3,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Businesses', null, {});
     
  }
};
