const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');

//! Importación de rutas
// Aqui agregarás tus rutas

const usersRouter = require('./routes/users.routes');
const businessRouter = require('./routes/business.routes');
const productsRouter = require('./routes/products.routes');

const globalErrorHandler = require('./controllers/error.controller');
const AppError = require('./utils/appError');

const app = express();

const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP. Please try again in one hour',
});

app.use(helmet());
app.use(express.json());
app.use(hpp());
app.use(xss());
app.use(cors());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('api/v1', limiter);

//! Uso de las rutas
// Ruta para manejar las solicitudes relacionadas con usuarios
app.use('/api/v1/users', usersRouter);
// Ruta para manejar las solicitudes relacionadas con negocios
app.use('/api/v1/business', businessRouter);
// Ruta para manejar las solicitudes relacionadas con productos
app.use('/api/ve/prodcts', productsRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
