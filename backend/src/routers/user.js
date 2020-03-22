const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const sendWelcomeEmail = require('../emails/account')

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email,req.body.password);
    const token = await user.generateAuthToken();
    res.send({user, token});
  } catch (e) {
    res.status(400).send("Username or password is not correct");
  }
});

module.exports = router;
