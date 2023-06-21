const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AdminsServices = require('../services/usersAdmins.service');
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

const adminsServices = new AdminsServices();

exports.createAdmin = catchAsync(async(req, res, next) => {
  const { userName, email, password, business_id } = req.body;

  const salt = await bcrypt.genSalt(8);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const admin = await adminsServices.createAdmin({
    userName,
    email,
    business_id,
    password: encryptedPassword,
  });

  const token = await generateJWT(admin.id);

  return res.status(201).json({
    status: 'Success',
    token,
    admin: {
      userName: admin.userName,
      email: admin.email,
    },
  });
});

exports.findAllAdmins = catchAsync(async(req, res, next) => {
  const admins = await adminsServices.findAllAdmins();

  return res.status(200).json({
    status: 'Success',
    results: admins.length,
    admins,
  });
});

exports.findOneAdmin = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const admin = await adminsServices.findOneAdmin(id);

  return res.status(200).json({
    status: 'Success',
    admin,
  });
});

exports.updateAdmin = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const { userName, email } = req.body;

  const admin = await adminsServices.findOneAdmin(id);

  const adminUpdate = await adminsServices.updateAdmin(admin, {
    userName,
    email,
  });

  return res.status(200).json({
    status: 'succes',
    adminUpdate,
  });
});

exports.deleteAdmin = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const admin = await adminsServices.deleteUAdmin(id);

  return res.status(200).json({
    status: 'Success',
  });
});
