const express = require('express');
const { getAllBookings, postBooking, deleteBooking, updateBookingStatus, getBookingsForUser } = require('../controller/booking.controller');
const router = express.Router();

router.get('/', getAllBookings);
router.post('/', postBooking);
router.delete('/:id', deleteBooking);
router.put('/:id', updateBookingStatus);
router.get('/user/:email', getBookingsForUser);

module.exports = router;
