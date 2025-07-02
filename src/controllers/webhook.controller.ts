
import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler.js";


/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 * @param {Request} req - The request object containing the username and password.
 * @param {Response} res - The response object to send the result back to the client.
 * * @returns {Promise<void>} Returns a JSON response with a success message and sets a cookie with the JWT token.
 */

export const handleWebhook = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    console.log("📩 Webhook received:", req.body);

    // Return confirmation to external API
    res.status(200).json({
      status: "success",
      message: "Webhook received successfully",
      data: req.body,
    });
  }
);