const express = require("express");
const router = express.Router();
const verify = require("../middleware/jwtVerify.js");
const { loginUser } = require("../controllers/users.js");

router.post("/verify", verify);

router.post(`/auth`, loginUser);

module.exports = router;
