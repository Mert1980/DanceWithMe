const express = require("express");

// require('./db/mongoose');

const app = express();
const port = process.env.PORT
console.log(port)

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });



