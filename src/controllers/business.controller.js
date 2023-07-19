const BusinesService = require('../services/business.service');
const catchAsync = require('../utils/catchAsync');
const { ref, uploadBytes } = require('firebase/storage');
const storage = require('../utils/firebase');
const db = require('../database/models/index');

const businesService = new BusinesService();

exports.createBusines = catchAsync(async (req, res, next) => {
  const { name, address, user_id } = req.body;

  const busines = await businesService.createBusines({
    name,
    address,
    user_id,
  });

  const imgRef = ref(
    storage,
    `business/${Date.now()}-${req.file.originalname}`
  );
  const imgUploaded = await uploadBytes(imgRef, req.file.buffer);

  await db.Busines_img.create({
    busines_id: busines.id,
    busines_imgUrl: imgUploaded.metadata.fullPath,
  });

  return res.status(201).json({
    status: 'Success',
    busines,
    // busines: {
    //   name: busines.name,
    //   address: busines.address,
    //   user_id: busines.user_id,
    //   product_id: busines.product_id,
    //   status: busines.status,
    // },
  });
});

exports.findAllBusines = catchAsync(async (req, res, next) => {
  const busines = await businesService.findAllBusines();

  return res.status(200).json({
    status: 'Success',
    results: busines.length,
    busines,
  });
});

exports.findOneBusines = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const busines = await businesService.findOneBusines(id);

  return res.status(200).json({
    status: 'Success',
    busines,
  });
});

exports.updateBusines = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const busines = await businesService.findOneBusines(id);

  const businesUpdate = await businesService.updateBusines(busines, {
    name,
    address,
  });

  return res.status(200).json({
    status: 'Success',
    businesUpdate,
  });
});

exports.deleteBusines = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await businesService.deleteBusines(id);

  return res.status(200).json({
    status: 'Success',
    message: 'delete succesfull',
  });
});
