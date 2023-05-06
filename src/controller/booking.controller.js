const { ObjectId } = require('mongodb');
const { getDb } = require('../../config/db.config');

exports.getAllBookings = async (req, res) => {
  const db = getDb();
  const booking = await db.collection('book').find({}).toArray();
  res.send(booking);
};

exports.postBooking = async (req, res) => {
  const db = getDb();
  const user = req.body;
  const result = await db.collection('book').insertOne(user);
  res.json(result);
};

exports.deleteBooking = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection('book').deleteOne(query);
  console.log(result);
  res.json(result);
};

exports.updateBookingStatus = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      status: "approved"
    },
  };
  const result = await db.collection('book').updateOne(filter, updateDoc, options);
  res.json(result);
};

exports.getBookingsForUser = async (req, res) => {
  const db = getDb();
  const userEmail = req.params.email;
  const query = { Email: userEmail };
  const result = await db.collection('book').find(query).toArray();
  res.send(result);
};
