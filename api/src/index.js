const express = require("express");
const userRouter = require("./routers/user");
var cors = require('cors')
require('./db/mongoose.js');

const app = express();

// This configures express to automatically parse JSON into
// an object so that we can access it in our request handlers
app.use(express.json());

// Cors package enables to use different ports for backend and frontend
// at the same time
app.use(cors())
app.use(userRouter);

module.exports = app






