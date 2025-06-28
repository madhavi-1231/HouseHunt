// backend/config/connect.js

// backend/config/connect.js
const mongoose = require('mongoose');

function connectionOfDb() {
  mongoose.connect('mongodb://127.0.0.1:27017/HouseHunt')
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error);
    });
}

module.exports = connectionOfDb; // <-- Export the function directly!
