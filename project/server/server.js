require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect.js");

connectDB();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/list.js"));
app.use(bodyParser.json());

app.use("/list", require("./routes/list"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
