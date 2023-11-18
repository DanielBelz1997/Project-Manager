const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authToken = req.headers.authorization || req.headers.Authorization;

  if (!authToken) {
    console.log(authToken);
    return res.status(403).json({ error: "token in missing." });
  }
  const token = authToken.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    console.log("here?");
    if (err) return res.status(401).json({ err: "token in invalid" });

    req.user = decoded;
    next();
  });
};

module.exports = verifyJWT;
