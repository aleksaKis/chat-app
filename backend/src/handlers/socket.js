import { io } from "../index.js";
import { dbHandlers, messages } from "./db.js";

export const socketHandlers = {
  message: (req, res) => {
    if (req.message && req.id) {
      if (messages[req.id] !== undefined) {
        messages[req.id] = [...messages[req.id], req.message];
      } else {
        messages[req.id] = [req.message];
      }
      // todo move this to disconnect and save multiple messages
      // const encryptedRow = encryptMessage(req.message);
      dbHandlers.insetMessages(req);
      io.emit("message", req);
    }
  },
  disconnect: () => {
    console.log("a user disconnected!");
  },
};
