const express = require("express");
const userRouter = require("./routers/user");
const path = require('path');
var cors = require('cors')

require('dotenv').config({path: path.resolve(process.cwd(), 'config', '.env'), debug: true});
require('./db/mongoose.js');

const app = express();
app.use(express.json());
app.use(cors())
app.use(userRouter);


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});



