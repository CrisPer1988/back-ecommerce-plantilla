const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.route('/').get(productsController.findAllProducts);

router
  .route('/:id')
  .delete(productsController.deleteProducts)
  .get(productsController.finOneProducts)
  .patch(productsController.updateProducts);

module.exports = router;
