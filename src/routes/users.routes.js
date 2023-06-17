const express = require('express');

const usersController = require('../controllers/users.controller');
const validField = require("../middlewares/validations.middleware")

const router = express.Router();

router
  .route('/')
  .post(validField.createUser, usersController.createUser)
  .get(usersController.findAllUsers);

router
  .route('/:id')
  .delete(usersController.deleteUser)
  .get(usersController.findOneUser)
  .patch(usersController.updateUser);

module.exports = router;
