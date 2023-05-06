require('dotenv').config();
const http = require('http');
const app = require('./src/app/app');
const PORT = process.env.PORT || 5000;
const { dbConnect } = require('./config/db.config');


// Create the server
const server = http.createServer(app);

// Run the server
server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT)
  dbConnect();
});