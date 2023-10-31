const express = require("express");
const router = express.Router();
const { getHomePage, loginUser } = require("../controllers/users.js");

router.get("/", getHomePage);
router.post("/auth", loginUser);

module.exports = router;
