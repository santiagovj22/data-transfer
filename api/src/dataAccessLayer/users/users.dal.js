const db = require("../database/database");

async function get() {
  try {
    const query = "SELECT * FROM users";
    db.query(query, (error, result) => {
      if (error) {
        console.log(error);
      }
      return result;
    });
  } catch (err) {
    console.log(err);
  }
}

async function create(data) {
  try {
    const { name, email, department, city } = data;
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, result) => {
      if (result.length > 0) {
        return;
      } else {
        const query = "INSERT INTO users (name,email,department, city) VALUES (?, ?, ?, ?)";
        db.query(query, [name, email, department, city], (err, result) => {
          if (err) {
            console.log(err);
          }
          return result;
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { get, create };
