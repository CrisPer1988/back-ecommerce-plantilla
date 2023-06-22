const catchAsync = require('../utils/catchAsync');


exports.createCategory = catchAsync(async (req, res, next) => {
  

  return res.status(201).json({
    status: 'Success',
    
  });
});

exports.findAllCategory = catchAsync(async (req, res, next) => {
  
  res.status(200).json({
    status: 'Success',

  });
});

exports.findOneCategory = catchAsync(async (req, res, next) => {
  
  res.status(200).json({
    status: 'Success',
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  

  return res.status(200).json({
    status: 'Success',
    
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {



  return res.status(200).json({
    status: 'Success',
    message: 'The category deleted ',
  });
});
