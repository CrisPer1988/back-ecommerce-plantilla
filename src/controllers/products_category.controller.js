const catchAsync = require('../utils/catchAsync');
const Products_categoryServices = require('../services/product_category.service');

const product_categoryService = new Products_categoryServices();

exports.createProduct_category = catchAsync(async (req, res, next) => {
  const { product_id, category_id } = req.body;

  const product_category = await product_categoryService.createProduct_category(
    { product_id, category_id }
  );

  return res.status(201).json({
    status: 'Success',
    product_category: {
      product_id: product_category.product_id,
      category_id: product_category.category_id,
    },
  });
});

exports.findAllProduct_category = catchAsync(async (req, res, next) => {
  const products_categories =
    await product_categoryService.findAllProduct_category();

  res.status(200).json({
    status: 'Success',
    results: products_categories.length,
    products_categories,
  });
});

exports.findOneProduct_category = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product_category =
    await product_categoryService.findOneProduct_category(id);

  res.status(200).json({
    status: 'Success',
    product_category,
  });
});

exports.updateProduct_category = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { product_id, category_id } = req.body;

  const product_category =
    await product_categoryService.findOneProduct_category(id);

  const product_categoryUpdate =
    await product_categoryService.updateProduct_category(product_category, {
      product_id,
      category_id,
    });

  return res.status(200).json({
    status: 'Success',
    product_categoryUpdate,
  });
});

exports.deleteProduct_category = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product_categoryDelete =
    await product_categoryService.deleteProduct_category(id);

  return res.status(200).json({
    status: 'Success',
    message: 'The product_category deleted ',
  });
});
