// load our app server 
const express = require('express');
const app = express();
const morgan = require("morgan");
const mysql = require('mysql')

app.use(morgan('combined'));

app.get('/user/:id', (req, res)=>{
    console.log("fetching user with id : " + req.params.id)
    const connection = mysql.createConnection({
    host : '127.0.0.1',
    port : 8889,
    user     : 'root',
    password : 'root',
    database : 'sinterklaas'
    })

    const queryString = "SELECT * FROM utilisateur  WHERE id= ?"
    connection.query( queryString,[req.params.id], (err, rows, fields)=>{
        if(err){
            console.log('failed to query for user '+ err);
            res.sendStatus(500);
            res.end();
        }
        const users = rows.map((row)=>{
            return {firstName : row.prenom, lastname : row.nom}
        })
        res.json(users)
        
    })

})

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