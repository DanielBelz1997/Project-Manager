require("dotenv").config();
import { Request, Response } from "express";
import { promisify } from "util";
import jwt from "jsonwebtoken";
import { connection } from "../db/connect";

const queryAsync = promisify(connection.query).bind(connection);

export async function getHomePage(req: Request, res: Response) {
  return res.send("this is the home page.");
}

export async function loginUser(req: Request, res: Response) {
  const query = `
  SELECT username, password FROM users
  WHERE username = ? AND password = ?
  `;

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(402).json({ message: "All fields are required" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "המשתמש אינו רשום במערכת" });
    }

    let loginData = {
      username,
      loginTime: Date.now(),
    };

    // ^ DONT PUT ENYTHING THAT SHOULD NOT TO BE PUBLIC! ^

    const token = jwt.sign(loginData, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}
