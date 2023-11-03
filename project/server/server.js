require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
// const bycrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const connection = require("./db/connect.js");
const logger = require("./modules/logger.js");

const port = process.env.PORT || 3302;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/api`, require(`./api.js`));

connection.connect(function (err) {
  if (err) console.log(err);
  logger.info(`Connected to DataBase: ${process.env.DB}`);
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

module.exports = app;
