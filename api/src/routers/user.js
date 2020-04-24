const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/authentication");
const router = new express.Router();
const sendWelcomeEmail = require("../emails/account");

/**
 * Just a simple test endpoint to demo how to test with Jest
 * Ref: https://devhints.io/jest
 **/
router.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

// This router creates a new user in database
router.post("/users", async (req, res) => {
  // Create new instance of User model with the user data coming from front-end(req.body)
  const user = new User(req.body);
  try {
    // Save user data into database
    await user.save();
    // Send welcoming email to the user. Greet user with his/her name
    sendWelcomeEmail(user.email, user.name);
    // Generate authentication when the user signsup
    const token = await user.generateAuthToken();
    // Send status code 201 along with user data and token if everything goes well
    res.status(201).send({ user, token });
  } catch (e) {
    // Send error message with code 400 in case of error
    res.status(400).send(e.message);
  }
});

// This route logs in the user.
router.post("/users/login", async (req, res) => {
  try {
    // Find user in the database with user email and password
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    // Generate authentication token when user logs in
    const token = await user.generateAuthToken();
    // Send user data and token to front-end. Token is stored in localstorage.
    res.send({ user, token });
  } catch (e) {
    // Send error message with code 400 in case of wrong username or password
    res.status(400).send("Username or password is not correct");
  }
});

// This route logs out user from the application
// Authentication middelware function is called before logging the user out
// The purpose of this middelware is to ensure authenticated user is being logged out
router.post("/users/logout", auth, async (req, res) => {
  try {
    // When user logs out, the auth token will be removed from tokens array,
    // so that we can follow if the user in or out.
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    // Save the updated user data
    await req.user.save();
    // Send user data back to frontend
    res.send();
  } catch (e) {
    // Send error message with code 400 in case of error
    res.status(500).send();
  }
});

// This route shows matched users when user goes to profile page.
// User is directed to profile page when he/she signs up or logs in.
// Authentication middelware function is called before switcing to profile page
// The purpose of this middelware is to ensure authenticated user has access to profile
router.post("/users/me", auth, async (req, res) => {
  try {
    // Location, partner gender, partner-age, partner-weight and partner-height
    // is sent to findMatchedUsers function as variables.
    const matched = await User.findMatchedUsers(
      req.user.location,
      req.user.partner_gender,
      req.user.partner_age,
      req.user.partner_weight,
      req.user.partner_height
    );
    // Send matched user data to front-end
    res.send(matched);
  } catch (e) {
    // Send status code 500 in case of an error
    res.status(500).send();
  }
});
// This route updates users profile
// req.user is sent from auth function in authentication.js
// req.body is sent by the client
router.patch("/users/me", async (req, res) => {
  const user = await User.findOne({ _id: req.body._id });
  const updates = Object.keys(req.body);

  try {
    updates.forEach((field) => {
      if (req.body[field] !== "" && req.body[field].length !== 0) {
        user[field] = req.body[field];
      }
    });
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
