const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const UsersServices = require('../services/users.service');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const usersServices = new UsersServices();

exports.createUser = catchAsync(async (req, res, next) => {
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

exports.findAllUsers = catchAsync(async (req, res, next) => {
  const users = await usersServices.findAllUsers();

  if (!users.length)
    return res.status(404).json({
      status: 'error',
      message: 'Users cant be found',
    });

  return res.status(200).json({
    status: 'Success',
    results: users.length,
    users,
  });
});

exports.findOneUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await usersServices.findOneUser(id);

  if (!user)
    return res.status(404).json({
      status: 'error',
      message: 'User cant be found',
    });

  return res.status(200).json({
    status: 'Success',
    user: {
      name: user.userName,
      email: user.email,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { userName, email } = req.body;

  const user = await usersServices.findOneUser(id);

  if (!user)
    return res.status(404).json({
      status: 'error',
      message: 'User was not found',
    });

  const userUpdated = await usersServices.updateUser(user, {
    userName: userName || user.userName,
    email: email,
  });

  return res.status(200).json({
    status: 'succes',
    message: 'The user has been updated',
    userUpdate: {
      name: userUpdated.userName,
      email: userUpdated.email,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await usersServices.deleteUser(id);

  return res.status(200).json({
    status: 'success',
    message: 'The user has been disabled',
    user: {
      name: user.userName,
    },
  });
});
