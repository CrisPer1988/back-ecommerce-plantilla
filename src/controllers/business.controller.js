const BusinessService = require('../services/business.service');
const catchAsync = require('../utils/catchAsync');

const businessService = new BusinessService();

exports.createBusiness = catchAsync(async (req, res, next) => {
  const { name, address, user_id, product_id } = req.body;

  const business = await businessService.createBusiness({
    name,
    address,
    user_id,
    product_id,
  });

  return res.status(201).json({
    status: 'Success',
    business: {
      name: business.name,
      address: business.address,
      user_id: business.user_id,
      product_id: business.product_id,
      status: business.status,
    },
  });
});

exports.findAllBusinesses = catchAsync(async (req, res, next) => {
  const businesses = await businessService.findAllBusinesses();

  return res.status(200).json({
    status: 'Success',
    results: businesses.length,
    businesses,
  });
});

exports.findOneBusiness = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const business = await businessService.findOneBusiness(id);

  return res.status(200).json({
    status: 'Success',
    business,
  });
});

exports.updateBusiness = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const business = await businessService.findOneBusiness(id);

  const businessUpdate = await businessService.updateBusiness(business, {
    name,
    address,
  });

  return res.status(200).json({
    status: 'Success',
    businessUpdate,
  });
});

exports.deleteBusiness = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await businessService.deleteBusiness(id);

  return res.status(200).json({
    status: 'Success',
  });
});
