const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const UsersServices = require('../services/users.service');
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

const usersServices = new UsersServices();

exports.createUser = catchAsync(async(req, res, next) => {
  const { userName, email, password } = req.body;

  const salt = await bcrypt.genSalt(8);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await usersServices.createUser({
    userName,
    email,
    password: encryptedPassword,
  });

  const token = await generateJWT(user.id);

  return res.status(201).json({
    status: 'Success',
    token,
    user: {
      userName: user.userName,
      email: user.email,
    },
  });
});

exports.findAllUsers = catchAsync(async(req, res, next) => {
  const users = await usersServices.findAllUsers();

  return res.status(200).json({
    status: 'Success',
    results: users.length,
    users,
  });
});

exports.findOneUser = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const user = await usersServices.findOneUser(id);

  return res.status(200).json({
    status: 'Success',
    user,
  });
});

exports.updateUser = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const { userName, email } = req.body;

  const user = await usersServices.findOneUser(id);

  const userUpdate = await usersServices.updateUser(user, {
    userName,
    email,
  });

  return res.status(200).json({
    status: 'succes',
    userUpdate,
  });
});

exports.deleteUser = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const user = await usersServices.deleteUser(id);

  return res.status(200).json({
    status: 'Success',
  });
});
