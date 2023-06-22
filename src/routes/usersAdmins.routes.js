const express = require('express');

const adminsController = require('../controllers/usersAdmins.controller');
const validField = require('../middlewares/validations.middleware');

const router = express.Router();

router
  .route('/')
  .post(validField.createAdmin, adminsController.createAdmin)
  .get(adminsController.findAllAdmins);

router
  .route('/:id')
  .delete(adminsController.deleteAdmin)
  .get(adminsController.findOneAdmin)
  .patch(adminsController.updateAdmin);

module.exports = router;
