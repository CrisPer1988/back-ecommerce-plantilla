const catchAsync = require('../utils/catchAsync');


exports.createBusines_img = catchAsync(async (req, res, next) => {
  
  return res.status(201).json({
    status: 'Success',
    
  });
});

exports.findAllBusines_img = catchAsync(async (req, res, next) => {


  return res.status(200).json({
    status: 'Success',
  });
});

exports.findOneBusines_img = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'Success',
  });
});

exports.updateBusines_img = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'Success',
  });
});

exports.deleteBusines_img = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'Success',
  });
});
