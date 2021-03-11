const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number },
});

module.exports = user = mongoose.model("users", userSchema);