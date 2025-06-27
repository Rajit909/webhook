import { Request, Response, NextFunction } from 'express';

type AsyncHandlerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const asyncHandler = (fn: AsyncHandlerFunction) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await fn(req, res, next);
    } catch (err: any) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message,
        });
    }
};

export default asyncHandler;
