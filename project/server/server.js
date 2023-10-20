const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/connect.js");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/list.js"));
app.use(bodyParser.json());

app.use("/list", require("./routes/list"));

connection.connect(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});
