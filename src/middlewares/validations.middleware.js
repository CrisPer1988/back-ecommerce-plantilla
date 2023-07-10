const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUser = [
  body('userName')
    .notEmpty()
    .withMessage('Username cannot be empty')
    .isString()
    .withMessage('Must be a valid name'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Use format email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('The password must have at least 8 characters'),
  validFields,
];

exports.updateUser = [
  body('userName').isString().withMessage('Must be a valid name'),
  body('email').isEmail().withMessage('Must be a valid email'),
  validFields,
];

exports.createAdmin = [
  body('userName').notEmpty().withMessage('Username cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Use format email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('The password must have at least 8 characters'),
  validFields,
];

exports.createBusiness = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('address').notEmpty().withMessage('Address cannot be empty'),
  validFields,
];

exports.PurchaseValidation = [
  body('product_Id').notEmpty().withMessage('product id no empty'),
  body('user_Id').notEmpty().withMessage('Id user is empty'),
  body('quantity')
    .notEmpty()
    .withMessage('this value is empty')
    .isBase64()
    .withMessage('value is number'),
  validFields,
];
