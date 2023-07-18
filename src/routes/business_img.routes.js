const express = require('express');

const business_imgController = require('../controllers/business_img.controller');

const router = express.Router();

router
  .route('/')
  .post( business_imgController.createBusines_img)
  .get(business_imgController.findAllBusines_img);

router
  .route('/:id')
  .delete(business_imgController.deleteBusines_img)
  .get(business_imgController.findOneBusines_img)
  .patch(business_imgController.updateBusines_img);

module.exports = router;


