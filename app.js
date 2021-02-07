const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.use(cors());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'libraryusers'
});
 
 
 connection.connect(function(err){
  if (err) throw err;

  console.log('connected');
});
 
    app.post('/register', function(req,resp){
      console.log( req.body);

      var sql = "insert into users values(null,'"+ req.body.username +"', '"+ req.body.firstname +"','"+ req.body.lastname +"','"+ req.body.email +"','"+ req.body.mobile +"','"+ req.body.IdNo +"')"
      connection.query(sql,function(err){
        if (err) throw err;


      
       });
      
      });
  
        
   
app.listen(3000);
