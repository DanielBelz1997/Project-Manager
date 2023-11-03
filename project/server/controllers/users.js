require("dotenv").config();
const connection = require("../db/connect.js");

async function getHomePage(req, res) {
  res.send(
    `"Auth API.\nPlease use POST /auth & POST /verify for authentication"`
  );
}

async function loginUser(req, res) {
  const query = `
  SELECT username, password FROM users
  WHERE username = ? AND password = ?
  `;
  console.log("dsadas");

  try {
    const { username, password } = req.body;
    console.log(username, password);

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

    let loginData = {
      username,
      loginTime: Date.now(),
    };

    const token = jwt.sign(loginData, process.env.JWTsecret);

    return res
      .status(200)
      .json({ message: "user was logged successfully!", token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}

async function verify(req, res) {
  const tokenHeaderKey = "jwt";
  const authToken = req.headers[tokenHeaderKey];

  try {
    const verified = jwt.verify(authToken, process.env.JWTsecret);
    if (verified) {
      return res.status(200).json({ status: "logged in", message: "succes" });
    } else {
      return res.status(401).json({ status: "invalid auth", message: "error" });
    }
  } catch (e) {
    return res.status(401).json({ status: "invalid auth", message: "error" });
  }
}

module.exports = { getHomePage, loginUser, verify };
