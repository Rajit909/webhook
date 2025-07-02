import express from "express";
import { handleWebhook } from "../../controllers/webhook.controller.js";


const router = express.Router();

/**
 * auth routes for user authentication
 */
router.post("/webhook", handleWebhook);


export default router;