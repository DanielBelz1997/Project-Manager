const express = require("express");
const router = express.Router();
// const verifyJWT = require("../middleware/jwtVerify.js");
import { loginUser, getHomePage } from "../controllers/users";

router.get(`/home`, getHomePage);

router.post(`/auth`, loginUser);

module.exports = router;
