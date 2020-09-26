const mysql = require("mysql");

require('dotenv').config()

const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected to the database!");
});

module.exports = connection;
