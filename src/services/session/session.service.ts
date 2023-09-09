import { compare } from "bcryptjs";
import { client } from "../../database";
import { AppError } from "../../errors";
import { sign } from "jsonwebtoken";
import { SessionRequest } from "../../interfaces/session.interface";
import { UsuarioResult } from "../../interfaces/usuario.interfaces";

const sessionService = async (sessionData: SessionRequest): Promise<string> => {
  const queryString: string = `
    SELECT * FROM usuario
    WHERE nomeUsuario = $1
    `;

  const queryResult: UsuarioResult = await client.query(queryString, [sessionData.nomeUsuario]);

  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong name/password", 401);
  }

  const matchPassword: boolean = await compare(sessionData.senhaUsuario, queryResult.rows[0].senhaUsuario);

  if (!matchPassword) {
    throw new AppError("Wrong password name/password", 401);
  }

  if (!queryResult.rows[0].active) {
    throw new AppError("This Usuario is not active", 401);
  }

  const token: string = sign({ nomeUsuario: queryResult.rows[0].nomeUsuario }, process.env.SECRET_KEY!);

  return token;
};

export default sessionService;
