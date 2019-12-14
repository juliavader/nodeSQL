// load our app server 
const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(morgan('combined'));
app.get('/',(req, res)=>{
    console.log('responding to route ');
    res.send('hello from route ')
    
})


app.get('/users',(req, res)=>{
    
    var user1= {firstName : 'stephan', lastname : 'curry'};
    const user2={firstName : 'Kevin', lastname : 'says'};
    res.json([user1,user2]) 
    res.send('nodemon auto updates  ')
    
})

// ping the server at localhost:3000
app.listen(3000, ()=>{console.log('server is listening')}
);