const catchAsync = require('../utils/catchAsync');
const Business_imgServices = require("../services/business_img.service")

const business_imgSservices = new Business_imgServices()

exports.createBusiness_img = catchAsync(async(req, res, next) => {
  const {business_id, business_imgUrl} = req.body

  const business_img = await business_imgSservices.createBusiness_img({
    business_id,
    business_imgUrl
  })

  return res.status(201).json({
    status: "Success",
    business_img
  })
  
  })

// exports.findAllBusiness_img = catchAsync(async (req, res, next) => {


//   return res.status(200).json({
//     status: 'Success',
//   });
// });

// exports.findOneBusiness_img = catchAsync(async (req, res, next) => {
//   return res.status(200).json({
//     status: 'Success',
//   });
// });

// exports.updateBusiness_img = catchAsync(async (req, res, next) => {
//   return res.status(200).json({
//     status: 'Success',
//   });
// });

exports.deleteBusiness_img = catchAsync(async (req, res, next) => {
  const {id} = req.params

  const business_img = await business_imgSservices.deleteBusiness_img(id)

  return res.status(200).json({
    status: 'Success',
  });
});
