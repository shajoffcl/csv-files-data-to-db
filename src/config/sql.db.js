const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "adda52",
});

connection.connect((err) => {
  if (!err) {
    console.log("MySQL database connected.");
  } else {
    console.log("Unable to connect database", err);
  }
});

module.exports = connection;