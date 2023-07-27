const express = require('express');

const businesController = require('../controllers/business.controller');
const validField = require('../middlewares/validations.middleware');
const { upload } = require('../utils/multer');

const router = express.Router();

router
  .route('/')
  .post(
    upload.single('busines_imgUrl',1),
    validField.createBusines,
    businesController.createBusines
  )
  .get(businesController.findAllBusines);

router
  .route('/:id')
  .delete(businesController.deleteBusines)
  .get(businesController.findOneBusines)
  .patch(businesController.updateBusines);

module.exports = router;
