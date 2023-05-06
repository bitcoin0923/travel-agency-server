const { MongoClient } = require('mongodb');
require('dotenv').config();


let _db;

const dbConnect = async () => {
  const client = new MongoClient(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  try {
    // Connect client and make database and connection
    await client.connect();
    console.log('Connected to MongoDB successfully!');
    _db = client.db("travel_agency");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw new Error('Database connection not established yet.');
};

module.exports = { dbConnect, getDb };

