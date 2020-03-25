const mongoose = require("mongoose");

// const uri = `mongodb+srv://HYF:${process.env.MONGODB_PSWD}@cluster0-by0o2.mongodb.net/test?retryWrites=true&w=majority`

    mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/DanceApp', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true // --> this allow as to access data quickly
  });

  const connection = mongoose.connection;

  connection.once('open', ()=>{
      console.log("MongoDB database connection established successfully!")
  })