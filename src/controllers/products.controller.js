const ProductsService = require('../services/products.service');
const catchAsync = require('../utils/catchAsync');
const { ref, uploadBytes } = require('firebase/storage');
const db = require('../database/models/index');
const storage = require('../utils/firebase');

const productsService = new ProductsService();

exports.createProduct = catchAsync(async (req, res, next) => {
  const { name, description, price, stock, busines_id, brand } = req.body;

  const product = await productsService.createProducts({
    name,
    description,
    price,
    stock,
    busines_id,
    brand,
  });

  const productImagesPromises = req.files.map(async (file) => {
    const imgRef = ref(
      storage,
      `product_images/${Date.now()}-${file.originalname}`
    );
    const imgUploaded = await uploadBytes(imgRef, file.buffer);

    return await db.Product_img.create({
      product_id: product.id,
      product_imgUrl: imgUploaded.metadata.fullPath,
    });
  });

  await Promise.all(productImagesPromises);

  return res.status(201).json({
    status: 'success',
    message: 'The product has been created',
    product,
  });
});

exports.findAllProducts = catchAsync(async (req, res, next) => {
  const products = await productsService.findAllProducts();

  if (!products.length) {
    return res.status(400).json({
      status: 'error',
      message: 'No product was found',
    });
  }

  return res.status(200).json({
    status: 'sucess',
    result: products.length,
    products,
  });
});

exports.finOneProducts = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const products = await productsService.findOneProduct(id);

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
