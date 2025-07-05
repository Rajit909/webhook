import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import { logToDatabase } from '../utils/logger.js';

/**
 * ABDM-Compliant Webhook Controller
 * Handles any callback from ABDM gateway (sync ACK + logging)
 */
export const handleWebhook = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { headers, method, query, body } = req;

  const requestId = headers['request-id'] || headers['x-request-id'];
  const timestamp = headers['timestamp'] || new Date().toISOString();
  const path = req.originalUrl;

  console.log('📬 ABDM Webhook Received');
  console.log('➡️ Method:', method);
  console.log('➡️ Path:', path);
  console.log('🔎 Headers:', headers);
  console.log('🧾 Body:', body);

  // Save to DB
  await logToDatabase({
    requestId,
    timestamp,
    method,
    path,
    headers,
    query,
    body,
  });

  // Optional: respond with 202 Accepted (for async hooks)
  res.status(200).json({
    status: 'success',
    message: 'Webhook received and logged successfully',
    meta: {
      path,
      requestId,
      timestamp,
    },
    body: body
  });
});
