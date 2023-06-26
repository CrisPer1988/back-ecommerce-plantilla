'use strict';
const moment = require("moment")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('UsersAdmins', 
      [
        {
          userName: 'Derian',
          email: "derian@gmail.com",
          password: "123456789",
          business_id: 1,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
      },
      {
        userName: 'Alex',
        email: "alex@gmail.com",
        password: "123456789",
        business_id: 1,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
    },
    {
      userName: 'Jamar',
      email: "jam@gmail.com",
      password: "123456789",
      business_id: 3,
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
  },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('UsersAdmins', null, {});
     
  }
};
