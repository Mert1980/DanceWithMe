const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
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
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
 });

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);//JWT_SECRET is the secret code to generate the token
  // {} --> payload, "" --> our secret
  // convert object ID to string
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
};

// static methods are accesseble on modal, sometimes called modal methods
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email }); // shorthand syntax --> {email}
  if (!user) {
    throw new Error("Unable to login!");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login!");
  }
  return user;
};

// Hash the plain text password before saving
// Arrow functions don't bind 'this'
userSchema.pre("save", async function(next) {
  // 'this' gives us access to the individual user that's about to be saved!!!
  const user = this;

  // first make sure the password has been created or modified. We prevent the password
  // to be hashed if that's already been hashed before
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
  // we call next when we're done! If we don't use it it's gonna hang forever
  // thinking that we're gonna run some code before saving the user and actually
  // it is not gonna save the user
});

const User = mongoose.model("User", userSchema);
module.exports = User;

