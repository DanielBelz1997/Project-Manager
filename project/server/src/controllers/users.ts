import { Request, Response } from "express";
import { promisify } from "util";
import jwt from "jsonwebtoken";
import { connection } from "../db/connect";
import { QueryOptions } from "mysql2";
import cookies from "cookie-parser";

const queryAsync = promisify(connection.query.bind(connection)) as (
  options: QueryOptions
) => Promise<any[]>;

async function runQuery(query: string, params: any[]): Promise<any[]> {
  return queryAsync({
    sql: query,
    values: params,
  });
}

export async function getHomePage(req: Request, res: Response) {
  return res.send("This is the home page.");
}

export async function loginUser(req: Request, res: Response) {
  const query: string = `
    SELECT username, password FROM users
    WHERE username = ? AND password = ?
  `;

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(402).json({ message: "All fields are required" });
    }

    const results = await runQuery(query, [username, password]);

    if (results.length === 0) {
      return res.status(401).json({ message: "המשתמש אינו רשום במערכת" });
    }

    let loginData = {
      username,
      loginTime: Date.now(),
    };
    // @ts-ignore
    const token = jwt.sign(loginData, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json(token);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}
