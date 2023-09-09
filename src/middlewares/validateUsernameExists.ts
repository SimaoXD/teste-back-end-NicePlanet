import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { ProdutorResult } from "../interfaces/produtor.interfaces";

const validateUsernameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username } = req.body;
  if (!username) return next();

  const query: ProdutorResult = await client.query('SELECT * FROM "produtor" WHERE "userName" = $1', [username]);
};
export default validateUsernameExists;
