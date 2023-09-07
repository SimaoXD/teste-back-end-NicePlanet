import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors";
import { z } from "zod";

const handleErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      message: error.message,
    });
  }

  if (error instanceof z.ZodError) {
    return res.status(400).json(error.flatten().fieldErrors);
  }
  console.log(error);

  return res.status(500).json({
    message: error.message,
  });
};

export default handleErrors;
