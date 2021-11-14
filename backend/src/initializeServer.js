import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const CORS = {
  origin: (process.env.NODE_ENV = "DEV" ? "*" : false),
  methods: ["GET", "POST", "DELETE", "PUT"],
};

export const initializeServer = (router) => {
  const app = express();
  app.use(cors(CORS));
  app.use(express.json());
  app.use("", router);
  return app;
};

export const createServerSocket = (server) => {
  return new Server(server, { cors: CORS });
};
