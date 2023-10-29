require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/connect.js");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", require("./api.js"));

const startServer = () => {
  connection.connect(function (err) {
    if (err) console.log(err);
    console.log(`running on port: ${port}`);
    console.log(`Connected to DataBase: ${process.env.DB}`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
