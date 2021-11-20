import express, {Router} from "express";
import cors from "cors";
import { Server } from "socket.io";
import {Server as HttpServer} from 'http';

const CORS = {
  // @ts-ignore
  origin: (process.env.NODE_ENV = "DEV" ? "*" : false),
  methods: ["GET", "POST", "DELETE", "PUT"],
};

export const initializeServer = (router: Router) => {
  const app = express();
  app.use(cors(CORS));
  app.use(express.json());
  app.use("", router);
  return app;
};

export const createServerSocket = (server: HttpServer) => {
  return new Server(server, { cors: CORS });
};
