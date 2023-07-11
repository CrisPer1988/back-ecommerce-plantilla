const express = require('express');

const validationMiddleware= require('../middlewares/validations.middleware')
const purchaseController = require('../controllers/purchase.controller');

const router = express.Router();

router
  .route('/')
  .get(purchaseController.findAllPurchases)
  .post(
    purchaseController.createPurchase);

router
.route('/:id')
.get(purchaseController.findOnePurchases)
.patch(purchaseController.updatePurchase)
.delete(purchaseController.deletePurchase)

module.exports = router;
