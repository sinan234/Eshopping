const mongoose = require('mongoose');
function connect(){
    mongoose.connect('mongodb://localhost:27017/Eshopping', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => {
      console.log('Connected to MongoDB');
      })
      .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
      });
}
module.exports={connect};