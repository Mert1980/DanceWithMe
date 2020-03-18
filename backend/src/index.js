const express = require("express");

// require('./db/mongoose');

const app = express();

const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'config', '.env'), debug: true});

const port = process.env.PORT
console.log(port)

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });



