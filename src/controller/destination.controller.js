const AsyncHandler = require('express-async-handler');
const { getDb } = require('../../config/db.config');


// @desc Get All Destination
// @route GET /destination/
// @access private

exports.getAllDestinationCtlr = AsyncHandler(async (req, res) => {
  const db = getDb();
  const destinations = await db.collection("destination").find({}).toArray();

  res.status(200).json({
    status: "Success",
    data: destinations,
    message: "Get Destination successfully!"
  })
})