import express from "express";
const router = express.Router();
import { loginUser, getHomePage } from "../src/controllers/users";

router.get("/users/", getHomePage);
router.post("/users/auth", loginUser);

module.exports = router;
