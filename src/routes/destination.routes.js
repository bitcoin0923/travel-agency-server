const express = require('express');
const router = express.Router();
const { getAllDestinationCtlr } = require('../controller/destination.controller');

// Get all Place Collection API
router.get('/', getAllDestinationCtlr);

module.exports = router;