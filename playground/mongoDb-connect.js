const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',{useNewUrlParser: true},(err,client)=>{
    if(err){
        return console.log("Connection Unsuccessful");
    }
    console.log("Connection Successful");
    const db=client.db();
    db.collection('ToDoApp').find({
        name: "Madhav Gupta"
    }).count().then((count)=>{
        console.log(`Here's your object: ${count}`);
    },(err)=>{
        if(err){
            console.log(err);
        }
    })
    client.close();
})