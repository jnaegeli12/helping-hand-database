var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'employees',
    database: 'services_db'
  });
};
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } 
  console.log("Connected to the database!");
});
// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
// connection.query = util.promisify(connection.query);
module.exports = connection;
