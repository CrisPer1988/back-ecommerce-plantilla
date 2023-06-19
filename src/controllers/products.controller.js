const ProductsService = require('../services/products.service');
const catchAsync = require('../utils/catchAsync');

const productsService = new ProductsService();

exports.findAllProducts = catchAsync(async (req, res, next) => {
  const products = await productsService.findAllProducts();

  return res.status(200).json({
    status: 'Success',
    result: products.length,
    products,
  });
});

exports.finOneProducts = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const products = await productsService.findOneProducts(id);

  return res.status(200).json({
    status: 'Success',
    products,
  });
});

exports.updateProducts = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, stock, brand } = req.body;

  const products = await productsService.findOneProducts(id);

  const productsUpdate = await productsService.updateProducts(products, {
    name,
    description,
    price,
    stock,
    brand,
  });

  return res.status(200).json({
    status: 'Success',
    productsUpdate,
  });
});

exports.deleteProducts = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await productsService.deleteProducts(id);

  return res.status(200).json({
    status: 'Success',
  });
});
