const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ToDo} = require('./models/ToDo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo1 = new ToDo({
        text: req.body.text
    })
    todo1.save().then((doc=>{
        res.send(doc);
        console.log(JSON.stringify(doc,undefined,2));
    }),(e)=>{
        res.send(req.statusCode(400).e);
    })
})

app.listen(3000,()=>{
    console.log('server started on port 3000');
})