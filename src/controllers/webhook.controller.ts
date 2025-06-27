
import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler.js";
import axios from "axios";


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
    const { url } = req.body;

    if (!url) {
      res.status(400).json({
        status: 'error',
        message: 'Missing "url" in request body',
      });
      return;
    }

    try {
      const response = await axios.get(url);

      res.json({
        status: 'success',
        requestedUrl: url,
        externalData: response.data,
      });
    } catch (error: any) {
      console.error('❌ Error fetching URL:', error.message);

      res.status(500).json({
        status: 'error',
        message: 'Failed to fetch data from the provided URL',
        error: error.message,
      });
    }
  }
);