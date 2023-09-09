import { client } from "../../database";

const deleteUsuarioService = async (idUsuario: string): Promise<void> => {
  const queryString: string = `UPDATE Usuario
    SET active = false
    WHERE idUsuario = $1`;

  await client.query(queryString, [idUsuario]);
};

export default deleteUsuarioService;
