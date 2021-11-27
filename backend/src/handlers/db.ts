import { connectToDb } from "../connection/db";
import { convertToHashArray } from "../utils/converToHashObject";
import { IMessageHashArray, IMessagePayload } from "../types";
import { Request, Response } from "express";

interface GetMessagesRequestProps extends Request {
  size?: number;
}

interface InsertMessageProps extends Request, IMessagePayload {}

const pool = connectToDb();
export let messages: IMessageHashArray = {};

export const dbHandlers = {
  getMessages: (request: GetMessagesRequestProps, response: Response) => {
    const limit = request.size || 20;
    pool.query(
      `SELECT * FROM messages ORDER BY time DESC LIMIT ${limit}`,
      (err, dbResponse) => {
        if (err) {
          response.status(500);
          return;
        }
        const messageResponse = dbResponse.rows.reverse();
        response.status(200).json(messageResponse);
        messages = convertToHashArray(messageResponse);
      }
    );
  },
  insertMessages: (request: InsertMessageProps) => {
    const { id, message, time } = request;
    pool.query(
      "INSERT INTO messages (id, message, time) VALUES ($1, $2, $3)",
      [id, message, time],
      (error) => {
        if (error) {
          // console.log(error);
        }
      }
    );
  },
  deleteAll: () => {
    pool.query("DELETE FROM messages", (error, results) => {
      if (error) {
        // console.log(error);
      }
      messages = [results.rows];
    });
  },
};
