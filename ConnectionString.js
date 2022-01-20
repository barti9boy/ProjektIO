var mysql = require("mysql");

var pool = mysql.createPool({
        connectionLimit : 1000,
        host: "mysql.agh.edu.pl",
        port: "3306",
        user: "kosciole",
        password: "InzynieriaOprogramowania",
        database : 'kosciole' 
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};