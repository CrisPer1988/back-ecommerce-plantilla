'use strict';
const moment = require("moment")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', 
      [
        {
        userName: 'Cristian',
        email: "norberto.cp@hotmail.com",
        password: "123456789",
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
      {
        userName: 'Andres',
        email: "andres@gmail.com",
        password: "123456789",
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
      {
        userName: 'Alma',
        email: "alma@gmail.com",
        password: "123456789",
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
    ], {});
 
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
