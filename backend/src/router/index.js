import express from "express";
import messagesHandler from "./messages.js";

export const router = express.Router();

router.get("/messages", messagesHandler);
