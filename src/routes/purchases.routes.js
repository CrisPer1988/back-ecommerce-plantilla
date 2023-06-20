const express = require('express');

const validationMiddleware= require('../middlewares/validations.middleware')
const purchaseMiddleware = require('../middlewares/purchase.middleware');
const purchaseController = require('../controllers/purchase.controller');

const router = express.Router();

router
  .route('/')
  .get(purchaseController.findAllPurchases)
  .post(
    //validationMiddleware.PurchaseValidation,
    purchaseController.createPurchase);

router
.route('/:id')
.get(purchaseController.findOnePurchases)
.patch(purchaseMiddleware.validExistPurchase,purchaseController.updatePurchase)
.delete(purchaseMiddleware.validExistPurchase,purchaseController.deletePurchase)

module.exports = router;
