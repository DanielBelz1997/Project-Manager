const express = require("express");
const router = express.Router();

router.use("/list", require("./routes/list.js"));

module.exports = router;
