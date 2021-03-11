const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected success"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;