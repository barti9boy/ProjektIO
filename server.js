var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host: "mysql.agh.edu.pl",
    port: "3306",
    user: "kosciole",
    password: "InzynieriaOprogramowania",
    database : 'kosciole' 
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
  });

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
  
  });
  

  
  app.get('/Trucks', function(req, res){
    con.query('select * from Trucks', function(error, rows, fields){
          if(error) console.log(error);
  
          else{
              console.log(rows);
  
          }
    });
  });