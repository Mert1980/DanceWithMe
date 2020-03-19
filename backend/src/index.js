const express = require("express");

require('./db/mongoose.js');

const app = express();
app.use(express.json());

const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'config', '.env'), debug: true});

const port = process.env.PORT
console.log(process.env.PORT)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });



