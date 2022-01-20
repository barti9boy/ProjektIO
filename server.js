const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: "mysql.agh.edu.pl",
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