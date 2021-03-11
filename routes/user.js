const express = require("express");
const router = express.Router();
const user = require("../models/user");

//GET :  RETURN ALL USERS

router.get("/", (req, res) => {
  user
    .find()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

//POST :  ADD A NEW USER

router.post("/", (req, res) => {
  const newUser = new user({ ...req.body });
  newUser
    .save()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

// DELETE : REMOVE A USER BY ID

router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  user
    .findByIdAndDelete({ _id })
    .then(() => res.send("users has been deleted"))
    .catch((err) => console.log(err));
});

// PUT : EDIT A USER BY ID

router.put("/:_id", (req, res) => {
  const { _id } = req.params;

  user
    .findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});
module.exports = router;