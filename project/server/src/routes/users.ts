const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/jwtVerify.js");
const { loginUser, getHomePage } = require("../controllers/users.js");

router.get(`/home`, getHomePage);

router.post(`/auth`, loginUser);

module.exports = router;
