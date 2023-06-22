const catchAsync = require('../utils/catchAsync');


exports.createBusiness_img = catchAsync(async (req, res, next) => {
  
  return res.status(201).json({
    status: 'Success',
    
  });
});

exports.findAllBusiness_img = catchAsync(async (req, res, next) => {


  return res.status(200).json({
    status: 'Success',
  });
});

exports.findOneBusiness_img = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'Success',
  });
});

exports.updateBusiness_img = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'Success',
  });
});

exports.deleteBusiness_img = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'Success',
  });
});
