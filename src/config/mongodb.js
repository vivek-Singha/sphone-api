const mongoose = require("mongoose");

require("dotenv").config();

function connectDb() {
  //   console.log(process.env.MONGODB_CONNECTION_STRING);

  mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("connected to the db");
    }
  );
}

module.exports = connectDb;
