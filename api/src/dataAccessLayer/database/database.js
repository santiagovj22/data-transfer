const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "db",
  user: "root",
  port: 3306,
  password: "secret",
  database: "test_db",
});

dbConnection.connect((err) => {
  try {
    if (!err) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = dbConnection;
