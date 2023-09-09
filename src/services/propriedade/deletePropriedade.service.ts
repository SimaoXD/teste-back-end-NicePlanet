import { client } from "../../database";

const deletePropriedadeService = async (idPropriedade: string): Promise<void> => {
  const queryString: string = `UPDATE propriedade
    SET active = false
    WHERE idPropriedade = $1`;

  await client.query(queryString, [idPropriedade]);
};

export default deletePropriedadeService;
