const express = require('express');

const business_imgController = require('../controllers/business_img.controller');

const router = express.Router();

router
  .route('/')
  .post( business_imgController.createBusiness_img)
//   .get(business_imgController.findAllBusiness_img);

router
  .route('/:id')
  .delete(business_imgController.deleteBusiness_img)
//   .get(business_imgController.findOneBusiness_img)
//   .patch(business_imgController.updateBusiness_img);

module.exports = router;


