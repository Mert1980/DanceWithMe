const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password can not contain "password"');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      // there is not a build in validation in mongoose for numbers
      if (value < 0) {
        throw new Error("Age must be a positive number!");
      }
    }
  } 
 });
const User = mongoose.model("User", userSchema);
module.exports = User;

