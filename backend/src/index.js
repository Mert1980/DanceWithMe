const express = require("express");
const userRouter = require("./routers/user");
require('./db/mongoose.js');

const app = express();
app.use(express.json());
app.use(userRouter);

const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'config', '.env'), debug: true});

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });



