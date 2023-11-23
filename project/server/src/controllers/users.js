require("dotenv").config();
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const connection = require("../db/connect.js");
const bycrypt = require("bcrypt");

const queryAsync = promisify(connection.query).bind(connection);

async function getHomePage(req, res) {
  return res.send("this is the home page.");
}

async function loginUser(req, res) {
  const query = `
  SELECT username, password FROM users
  WHERE username = ? AND password = ?
  `;

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(402).json({ message: "All fields are required" });
    }

    const results = await queryAsync(query, [username, password]);

    if (results.length === 0) {
      return res.status(401).json({ message: "המשתמש אינו רשום במערכת" });
    }

    let loginData = {
      username,
      loginTime: Date.now(),
    };

    // ^ DONT PUT ENYTHING THAT SHOULD NOT TO BE PUBLIC! ^

    const token = jwt.sign(loginData, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}

module.exports = { getHomePage, loginUser };
