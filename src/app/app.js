const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const globalErrorHandler = require('../middlewares/global-error-handler');
const notFoundErrorHandler = require('../middlewares/not-found-handler');
const app = express();

// === Middlewares ===
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Import routes
const destinationRoutes = require('../routes/destination.routes');
const packageRoutes = require('../routes/package.routes');
const bookingRoutes = require('../routes/booking.routes');

// Register routes
app.use('/destination', destinationRoutes);
app.use('/package', packageRoutes);
app.use('/booking', bookingRoutes);

// === Error Middlewares ===
app.use(notFoundErrorHandler)
app.use(globalErrorHandler)


module.exports = app;