const express = require('express');

const categoryController = require('../controllers/category.controller');

const router = express.Router();

router
  .route('/')
  .post(categoryController.createCategory)
  .get(categoryController.findAllCategory);

router
  .route('/:id')
  .get(categoryController.findOneCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
