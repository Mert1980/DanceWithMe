const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User model is defined by using mongoose schema
// In every field, we defined the type of the data as well as limitations and validation if necessary
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // true means mandatory
    trim: true, // trim is used to remove empty spaces if typed by the user unintentionally
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) { // We validate the email before saving it to database
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) { // "password" or "PASSWORD" is not allowed
      if (value.toLowerCase().includes("password")) { 
        throw new Error('Password can not contain "password"');
      }
    },
  },
  location: {
    type: String,
    required: false,
  },
  years_of_experience: {
    type: Number,
    required: false,
  },
  more_about_you: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  partner_gender: {
    type: String,
    required: false,
  },
  partner_age: {
    type: String,
    required: false,
  },
  partner_weight: {
    type: String,
    required: false,
  },
  partner_height: {
    type: String,
    required: false,
  },
  dance_preference: {
    type: [], // Dance preferences are storen in an array
    required: false,
  },
  tokens: [ // Tokens are stored in an array of objects
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

/* 
This method is created to hide private data while sending res.user info to the client.
In order to use "this" key word, regular function is used instead of an arrow function. 
When res.send({user, token}) is called in routers, it automatically calls JSON.stringify
which calls toJSON method behind the scenes. In order to reach JS Object, toJSON method is 
used and "this" is assigned to user variable.
*/
userSchema.methods.toJSON = function () {
  const user = this;

/* 
Documents have a toObject method which converts the mongoose document into a plain
javascript object. The toObject method is a method provided by Mongoose to clean up
the object so it removes all of the metadata and methods (like .save() or .toObject())
that Mongoose attaches to it. It just becomes a regular object afterwards.
*/
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// The methods which are accesseble on instances, are sometimes called instance methods
// We use this method to generate authentication token whenever a new user signs up or 
// a registred user logs in
userSchema.methods.generateAuthToken = async function () {
  const user = this;

  // JWT_SECRET is the secret key that we use to generate token 
  // First variable {} is the payload, while the second is our secret key
  // We keep this key in .env file
  // We convert object ID to string in order to perform this method
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET); 
  
  // Created tokens are added to tokens array via concat method
  user.tokens = user.tokens.concat({ token });

  // Save the updated user into database
  await user.save();

  return token;
};

// Static methods which are accesseble on modal, are sometimes called modal methods
// This function finds the user in database by email and password
// email and password variables are coming from front-end via request body
userSchema.statics.findByCredentials = async (email, password) => {
  // findone is a mongoose method. It returns the user if email is registered 
  const user = await User.findOne({ email: email }); // shorthand syntax --> {email}

  // If there is no user with a given email we throw an error
  if (!user) {
    throw new Error("Unable to login!");
  }

  // We check the validity of the given password with the password in the database
  // bcrypt package is used to perform this function
  // The first parameter is coming from front-end via request body and the second
  // parameter is coming from database 
  const isMatch = await bcrypt.compare(password, user.password);

  // If passwords do not match, we throw an error
  if (!isMatch) {
    throw new Error("Unable to login!");
  }
  return user;
};

// This function match users in accordance with location, gender, age, weight and height
// Those parameters are coming from front-end via request body
// Partner-age/weight/height are sent via select box and stored in database as String.
// As an example --> "age": "18-25" we split them by "-" and cast them into numbers
// in order to perform "find" mongoose method
userSchema.statics.findMatchedUsers = async (
  location,
  partner_gender,
  partner_age,
  partner_weight,
  partner_height
) => {
  minAge = parseInt(partner_age.split("-")[0]);
  maxAge = parseInt(partner_age.split("-")[1]);
  minWeight = parseInt(partner_weight.split("-")[0]);
  maxWeight = parseInt(partner_weight.split("-")[1]);
  minHeight = parseInt(partner_height.split("-")[0]);
  maxHeight = parseInt(partner_height.split("-")[1]);

  // Mongoose method "find" is used to find matched users
  // It returns array of objects
  // We substract 1 from minAge/minWeight/minHeight and add 1 to maxAge/maxWeight/maxHeight
  // in order to cover the range because "$gt" represents "greater than" and "$lt" represents "less than"
  // We return only "id, name, email, dance-prefence and location" fields of the matched users to front-end
  // by assigning them "1"
  const matchedUsers = await User.find(
    {
      location: location,
      gender: partner_gender,
      age: { $gt: minAge-1, $lt: maxAge+1 },
      weight: { $gt: minWeight-1, $lt: maxWeight+1 },
      height: { $gt: minHeight-1, $lt: maxHeight+1 }
    },
    { _id: 1, name: 1, email: 1, dance_preference: 1, location: 1 }
  );

  // If there is no matched user in the database we throw an error
  if (!matchedUsers) {
    throw new Error("Unable to match users!");
  }
  return matchedUsers;
};

// Hash the plain text password before saving
// Arrow functions don't bind 'this'
userSchema.pre("save", async function (next) {
  // 'this' gives us access to the individual user that's about to be saved!
  const user = this;

  // first make sure the password has been created or modified. We prevent the password
  // to be hashed if that's already been hashed before
  // We choose "8" as hashing difficulty
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
