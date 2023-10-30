const express = require("express");
const router = express.Router();

router.use("/list", require("./routes/list.js"));
// router.use("/users", require("./routes/users.js"));

module.exports = router;
