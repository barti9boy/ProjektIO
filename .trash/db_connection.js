var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql.agh.edu.pl",
  user: "kosciole",
  password: "InzynieriaOprogramowania",
  database: "kosciole"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM Trucks", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    });
});
