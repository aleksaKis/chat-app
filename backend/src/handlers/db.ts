import { connectToDb } from "../connection/db";
import { convertById } from "../utils/converToHashObject";

const pool = connectToDb();
export let messages = {};

export const dbHandlers = {
  getMessages: (request, response) => {
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
        messages = convertById(messageResponse);
      }
    );
  },
  insetMessages: (request) => {
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
      messages = results.rows;
    });
  },
};
