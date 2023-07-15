const express = require("express");
const router = express.Router();
const usersController = require("../controllers/list.js");

router
  .route("/list")
  .get(usersController.getList)
  .post(usersController.postList);

module.exports = router;
