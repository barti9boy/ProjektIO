var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql.agh.edu.pl",
  user: "kosciole",
  password: "InzynieriaOprogramowania"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
