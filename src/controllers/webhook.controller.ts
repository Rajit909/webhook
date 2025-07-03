
  import { Request, Response } from "express";
  import asyncHandler from "../utils/asyncHandler.js";


  /**
   * @route   POST /api/v1
   * @desc    get response
   * @access  Public
   * @param {Response} res - The response object to send the result back to the client.
   * * @returns {Promise<void>} Returns a JSON response with a success message and sets a cookie with the JWT token.
   */

export const handleWebhook = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    console.log("📩 Webhook received:");
    console.log("🔎 Headers:", req.headers);
    console.log("🧾 Body:", req.body);

    res.status(200).json({
      status: "success",
      message: "Webhook received successfully",
      data: req.body,
    });
  }
);
