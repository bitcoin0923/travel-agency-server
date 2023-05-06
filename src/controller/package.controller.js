const AsyncHandler = require('express-async-handler');
const { getDb } = require('../../config/db.config');
const ObjectId = require('mongodb').ObjectId;


// @desc Get All Packages
// @route GET /package/
// @access public

exports.getAllPackageCtlr = AsyncHandler(async (req, res) => {
  const db = getDb();
  const packages = await db.collection("resort").find({}).toArray();

  res.status(200).json({
    status: "Success",
    data: packages,
    message: "Get Packages successfully!"
  })
})

// @desc Get Single Package
// @route GET /package/:id
// @access private
exports.getSinglePackageCtlr = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const db = getDb();
  const package = await db.collection("resort").findOne(query);

  if (!package) {
    throw new Error("Package not found by this ID!")
  } {
    res.status(200).json({
      status: "Success",
      package: package
    })
  }
})

// @desc Create new Package
// @route POST /package/:id
// @access private
exports.createPackageCtlr = AsyncHandler(async (req, res) => {
  const package = req.body;
  const db = getDb();
  const newPackage = await db.collection("resort").insertOne(package);

  return res.status(201).json({
    status: 'success',
    data: newPackage,
    message: "Package created successfully"
  })
})