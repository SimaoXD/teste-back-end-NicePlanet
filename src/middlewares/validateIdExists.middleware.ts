import { Request, Response, NextFunction } from "express";
import { UsuarioResult } from "../interfaces/usuarios.interfaces";
import { client } from "../database";
import { AppError } from "../errors/AppError";

const validateIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.params;

  const query: UsuarioResult = await client.query('SELECT * FROM "users" WHERE "id" = $1', [userId]);

  if (query.rowCount === 0) {
    throw new AppError("User not Found", 404);
  }

  res.locals = { ...res.locals, foundUser: query.rows[0] };

  return next();
};

export default validateIdExists;
