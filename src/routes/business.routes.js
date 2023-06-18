const express = require('express');

const businessController = require('../controllers/business.controller');
const validField = require('../middlewares/validations.middleware');

const router = express.Router();

router
  .route('/')
  .post(validField.createBusiness, businessController.createBusiness)
  .get(businessController.findAllBusinesses);

router
  .route('/:id')
  .delete(businessController.deleteBusiness)
  .get(businessController.findOneBusiness)
  .patch(businessController.updateBusiness);

module.exports = router;
