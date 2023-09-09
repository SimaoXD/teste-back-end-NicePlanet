import { Request, Response, NextFunction } from "express";
import { ProdutorResult } from "../interfaces/produtor.interfaces";
import { client } from "../database";
import { AppError } from "../errors";

const validateIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { idProdutor } = req.params;

  const query: ProdutorResult = await client.query('SELECT * FROM "produtor" WHERE "idProdutor" = $1', [idProdutor]);

  if (query.rowCount === 0) {
    throw new AppError("Produtor not Found", 404);
  }

  res.locals = { ...res.locals, foundUser: query.rows[0] };

  return next();
};

export default validateIdExists;
