const catchAsync = require('../utils/catchAsync');
const CategoryServise = require('../services/category.service');
const categoryServise = new CategoryServise();

exports.createCategory = catchAsync(async (req, res, next) => {
  const { name } = req.body

  const category = await categoryServise.createCategory({ name })
  return res.status(201).json({
    status: 'Success',
    category,
  });
});

exports.findAllCategory = catchAsync(async (req, res, next) => {
  const categorys= await categoryServise.findAllCategory()
  res.status(200).json({
    status: 'Success',
    categorys
  });
});

exports.findOneCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const category = await categoryServise.findOneCategory(id); 
  res.status(200).json({
    status: 'Success',
    category
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body
  const category =
  await categoryServise.findOneCategory(id);

  const categoryUpdate =
    await categoryServise.updateCategory(category,{
      name
    })

  return res.status(200).json({
    status: 'Success',
    message:'update Succesull',
    categoryUpdate
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await categoryServise.deleteCategory(id);


  return res.status(200).json({
    status: 'Success',
    message: 'The category deleted ',
  });
});
