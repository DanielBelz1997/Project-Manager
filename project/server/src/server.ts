require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";
const app = express();
import { ErrorRequestHandler } from "express";
import cors from "cors";
import connection from "./db/connect.js";
import logger from "./modules/logger.js";

const port = process.env.PORT || 3302;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/api`, require(`./api.js`));

connection.connect(function (err: ErrorRequestHandler) {
  if (err) console.log(err);
  logger.info(`Connected to DataBase: ${process.env.DB}`);
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

module.exports = app;
