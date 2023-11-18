const express = require("express");
const router = express.Router();
const { getUsers, loginUser } = require("../controllers/list.js");

// router.get("/getUsers", getUsers);
// router.get("/logintUser", loginUser);

module.exports = router;
