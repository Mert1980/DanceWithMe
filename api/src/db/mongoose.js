const mongoose = require("mongoose");

// customize the path for config variables
const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'api','config', '.env'), debug: true});

// connect mongodb cluster with a connection string
// MONGODB_PSWD is the password created in mongodb cluster. We store it in .env file
const uri = `mongodb+srv://HYF:${process.env.MONGODB_PSWD}@cluster0-by0o2.mongodb.net/test?retryWrites=true&w=majority`

// mongodb://127.0.0.1:27017/DanceApp --> this url is an alternative local database connection
    mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true // --> this allow as to access data quickly
  });

  // use mongoose to connect mongodb database
  const connection = mongoose.connection;

  // inform user when the database connection is successful
  connection.once('open', ()=>{
      console.log("MongoDB database connection established successfully!")
  })