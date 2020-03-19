const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; // --> connects to the database

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "DanceApp";

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client)=>{
    if (error){
        return console.log('Unable to connect to the database!')
    }
    console.log('successfull')
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name:'Mert',
        age: 39
    })
})