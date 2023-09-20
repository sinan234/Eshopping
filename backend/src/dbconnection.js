// const mongoose = require('mongoose');
// function connect(){
//     mongoose.connect('mongodb://127.0.0.1:27017/Eshopping', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       })
//         .then(() => {
//       console.log('Connected to MongoDB');
//       })
//       .catch((error) => {
//       console.error('Error connecting to MongoDB:', error);
//       });
// }
// module.exports={connect};

const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Eshopping', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Throw the error to be caught in the server.js file
  }
}

module.exports = { connect };
