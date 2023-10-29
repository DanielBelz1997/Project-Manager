const list = require("../modules/list");
const connection = require("../db/connect.js");

async function getUsers(req, res) {
  try {
    connection.connect();

    const query = `select * from users`;

    connection.query(query, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: error });
      }

      console.log(results);
      return res.status(200).json({ message: "got them!", results: results });
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}

async function loginUser(req, res) {
  const query = `
  SELECT username, password FROM users
  WHERE username = ? AND password = ?
  `;

  try {
    const { username, password } = req.body;
    console.log(username);

    if (!username || !password) {
      return res.status(402).json({ message: "All fields are required" });
    }

    connection.query(query, [username, password], (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: error });
      } else if (!results) {
        console.log(error);
        return res.status(401).json({ message: "המשתמש אינו רשום במערכת" });
      }
    });

    return res.status(200).json({ message: "user was logged successfully!" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}

module.exports = {
  getUsers,
  loginUser,
};
