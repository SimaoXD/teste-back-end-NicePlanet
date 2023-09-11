import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { ProdutorResult } from "../interfaces/produtor.interfaces";

const validateUsernameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username } = req.body;
  if (!username) return next();

  const query: ProdutorResult = await client.query('SELECT * FROM "Produtor" WHERE "nomeProdutor" = $1', [username]);
};

const validateCpfExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { cpfProdutor } = req.body;
  if (!cpfProdutor) return next();

  const query: ProdutorResult = await client.query('SELECT * FROM "Produtor" WHERE "cpfProdutor" = $1', [cpfProdutor]);
};
export default validateCpfExists;
validateUsernameExists;
