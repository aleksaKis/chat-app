import express from "express";
import { dbHandlers } from "../handlers/db.js";

const router = express.Router();

router.get("/messages", dbHandlers.getMessages);
router.delete("messages", dbHandlers.deleteAll);

export default router;
