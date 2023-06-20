const express = require('express');

const products_categoryController = require('../controllers/products_category.controller');

const router = express.Router();

router
  .route('/')
  .post(products_categoryController.createProduct_category)
  .get(products_categoryController.findAllProduct_category);

router
  .route('/:id')
  .get(products_categoryController.findOneProduct_category)
  .patch(products_categoryController.updateProduct_category)
  .delete(products_categoryController.deleteProduct_category);

module.exports = router;
