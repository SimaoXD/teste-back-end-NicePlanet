import { hash } from "bcryptjs";
import format from "pg-format";
import { object } from "zod";
import { client } from "../../database";
import { UsuarioRequest, UsuarioResult, UsuarioReturn } from "../../interfaces/usuario.interfaces";
import { usuarioWithoutPassword } from "../../schemas/usuario.schemas";

export const createUsuarioService = async (usuarioData: UsuarioRequest): Promise<UsuarioReturn> => {
  usuarioData.senhaUsuario = await hash(usuarioData.senhaUsuario, 10);

  const queryString: string = format(
    `
        INSERT INTO usuario (%I)
        VALUES(%L)
        RETURNING *
        `,
    Object.keys(usuarioData),
    Object.values(usuarioData)
  );

  const queryResult: UsuarioResult = await client.query(queryString);

  return usuarioWithoutPassword.parse(queryResult.rows[0]);
};
