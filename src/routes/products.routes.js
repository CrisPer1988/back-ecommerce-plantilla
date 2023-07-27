const express = require('express');
const {upload} = require('../utils/multer');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(upload.array('product_imgUrl', 5), productsController.createProduct);

router
  .route('/:id')
  .delete(productsController.deleteProducts)
  .get(productsController.finOneProducts)
  .patch(productsController.updateProducts);

module.exports = router;
