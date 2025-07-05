import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import { logToDatabase } from '../utils/logger.js';



export const handleWebhook = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  console.log("📩 Webhook received:");
  console.log("🔎 Headers:", req.headers);
  console.log("🧾 Body:", req.body);

  // Log to MongoDB
  await logToDatabase({
    method: req.method,
    headers: req.headers,
    query: req.query,
    body: req.body
  });

  res.status(200).json({
    status: 'success',
    message: 'Webhook received and logged successfully',
    data: req.body,
  });
});
