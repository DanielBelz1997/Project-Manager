const jwt = require("jsonwebtoken");
require("dotenv").config();
function verify(req, res, next) {
  const authToken = req.headers["jwt-token"];
  console.log(authToken);

  if (!authToken) {
    console.log(authToken);
    return res.status(403).json({ error: "token in missing." });
  }
  jwt.verify(authToken, process.env.JWTsecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ err: "token in invalid" });
    }

    req.user = decoded;
    next();
  });
}

module.exports = verify;
