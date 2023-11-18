require("dotenv").config();
const jwt = require("jsonwebtoken");
const connection = require("../db/connect.js");
const bycrypt = require("bcrypt");

async function getHomePage(req, res) {}

async function loginUser(req, res) {
  const query = `
  SELECT username, password FROM users
  WHERE username = ? AND password = ?
  `;

  try {
    const { username, password } = req.body;
    console.log(req.body);

    if (!username || !password) {
      return res.status(402).json({ message: "All fields are required" });
    }

    connection.query(query, [username, password], (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: error });
      } else if (results.length === 0) {
        return res.status(401).json({ message: "המשתמש אינו רשום במערכת" });
      }
    });

    let loginData = {
      username,
      loginTime: Date.now(),
    };

    const token = jwt.sign(loginData, process.env.JWTsecret, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}

module.exports = { getHomePage, loginUser };
