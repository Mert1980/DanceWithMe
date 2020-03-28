const mongoose = require("mongoose");
const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'api','config', '.env'), debug: true});

const uri = `mongodb+srv://HYF:${process.env.MONGODB_PSWD}@cluster0-by0o2.mongodb.net/test?retryWrites=true&w=majority`
// mongodb://127.0.0.1:27017/DanceApp
    mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true // --> this allow as to access data quickly
  });

  const connection = mongoose.connection;

  connection.once('open', ()=>{
      console.log("MongoDB database connection established successfully!")
  })