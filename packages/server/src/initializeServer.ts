import express, { Express, Router } from "express";
import cors, { CorsOptions } from "cors";
import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import dotenv from "dotenv";

// Add environment variables
dotenv.config();

const CORS: CorsOptions = {
  origin: process.env.NODE_ENV === "DEV" ? "*" : undefined,
  methods: ["GET", "POST", "DELETE", "PUT"],
};

export const initializeServer = (router: Router): Express => {
  const app = express();
  app.use(cors(CORS));
  app.use(express.json());
  app.use("", router);
  return app;
};

export const createServerSocket = (server: HttpServer): Server => {
  return new Server(server, { cors: CORS });
};
