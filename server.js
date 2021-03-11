const express = require("express");
const server = express();
const x = require("dotenv").config();
const connectDB = require("./config/connectDB");
console.log(x);
const port = process.env.PORT;
server.use(express.json());
connectDB();
server.use("/api/user", require("./routes/user"));

server.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`server connectt on http://localhost:${port}`);
});