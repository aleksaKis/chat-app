import { io } from "../index";
import { dbHandlers, messages } from "./db";
import { Request } from "express";
import { IMessagePayload } from "../types";

interface MessageProps extends Request, IMessagePayload {}

export const socketHandlers = {
  message: async (req: MessageProps) => {
    const { id, message } = req;
    if (id && message) {
      if (messages[id] !== undefined) {
        messages[id] = [...messages[id], message];
      } else {
        messages[req.id] = [req.message];
      }
      // todo use middleware to enable message encryption
      // const encryptedRow = encryptMessage(req.message);
      dbHandlers.insertMessages(req);
      io.emit("message", req);
    }
  },
  disconnect: async () => {
    // console.log("a user disconnected!");
  },
};
