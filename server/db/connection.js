const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "testing",
  port: 3306,
});

connection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(" cannot connect");
  }
});
module.exports = connection;
