import express from "express";
import messagesHandler from "./messages";

export const router = express.Router();

router.get("/messages", messagesHandler);
