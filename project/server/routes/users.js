const express = require("express");
const router = express.Router();
const { getHomePage, loginUser, verify } = require("../controllers/users.js");

router.get("/", getHomePage);
router.post(`/auth`, loginUser);
router.post("/verify", verify);

module.exports = router;
