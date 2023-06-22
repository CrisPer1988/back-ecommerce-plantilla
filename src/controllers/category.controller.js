const catchAsync = require('../utils/catchAsync');
const CategoryServices = require("../services/category.service")

const categoryServices = new CategoryServices()


exports.createCategory = catchAsync(async (req, res, next) => {
  const {name} = req.body

  const category = await categoryServices.createCategory({name})
  

  return res.status(201).json({
    status: 'Success',
    category
    
  });
});

exports.findAllCategory = catchAsync(async (req, res, next) => {

  const categories = await categoryServices.findAllCategories()
  
  res.status(200).json({
    status: 'Success',
    results: categories.length,
    categories


  });
});

exports.findOneCategory = catchAsync(async (req, res, next) => {

  const {id} = req.params

  const category = await categoryServices.findOneCategory(id)
  
  res.status(200).json({
    status: 'Success',
    category
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const {id} = req.params
  const {name} = req.body

  const category = await categoryServices.findOneCategory(id)

  const categoryUpdate = await categoryServices.updateCategory(category, {name})

  return res.status(200).json({
    status: 'Success',
    categoryUpdate
    
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
  const {id} = req.params
  const category = await categoryServices.findOneCategory(id)

  const categoryDelete = await categoryServices.deleteCategory(category, {status: "disable"})

  return res.status(200).json({
    status: 'Success',
    message: 'The category deleted ',
  });
});
