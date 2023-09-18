const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./src/dbconnection')

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Define your routes and handlers here

// Start the server
const port = 3000; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

db.connect();