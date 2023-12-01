require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";
const app = express();
import cors from "cors";
import { connection } from "./db/connect";
import { logger } from "./modules/logger";
import morgan from "morgan";

const port = process.env.PORT || 3302;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/api`, require(`./api.ts`));

connection.connect(function (err) {
  if (err) console.log(err);
  logger.info(`Connected to DataBase: ${process.env.DB}`);
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

module.exports = app;
