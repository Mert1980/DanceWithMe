const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/authentication");
const router = new express.Router();
const sendWelcomeEmail = require("../emails/account");

/**
* Just a simple test endpoint to demo how to test with Jest
* Ref: https://devhints.io/jest
**/
router.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send("Username or password is not correct");
  }
});

// if user logs out, the auth token will be removed from tokens array
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/me", auth, async (req, res) => {
  try {
    const matched = await User.findMatchedUsers(req.user.location);
    res.send(matched);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
