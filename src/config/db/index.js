const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://admin:adgjm12345@cluster0.aqb89rw.mongodb.net/web-app');
        console.log("Connect to DB successfully!");
      } catch (error) {
        console.log(error);
      }
}

module.exports = {connect};
