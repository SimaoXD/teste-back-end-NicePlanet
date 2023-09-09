import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const ensureDataIsValidMiddleware =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validatedData: any = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export default ensureDataIsValidMiddleware;
