import express from "express";
import { handleWebhook } from "../../controllers/webhook.controller.js";

const router = express.Router();

router.get("/webhook", handleWebhook);


export default router;