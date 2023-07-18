const express = require('express');

const businesController = require('../controllers/business.controller');
const validField = require('../middlewares/validations.middleware');

const router = express.Router();

router
  .route('/')
  .post(validField.createBusines, businesController.createBusines)
  .get(businesController.findAllBusines);

router
  .route('/:id')
  .delete(businesController.deleteBusines)
  .get(businesController.findOneBusines)
  .patch(businesController.updateBusines);

module.exports = router;
