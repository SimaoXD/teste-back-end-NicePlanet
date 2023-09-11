import { client } from "../../database";
import { AppError } from "../../errors";

const listProdutorPropriedadeService = async (idProdutor: string) => {
  const queryString: string = `
  SELECT
  d."idProdutor" "produtorId",
  d."nomeProdutor" "produtorName",
  d."cpfProdutor" "produtorCpf",
  p."idPropriedade" "propriedadeId",
  p."nomePropriedade" "propriedadeName",
  p."cadastroRural" "ProriedadeCadastro"
FROM produtor d
  JOIN propriedade p
  ON p."idPropriedade" = d."idPropriedade"
WHERE d."idProdutor" = $1
    
    `;

  const queryResult = await client.query(queryString, [idProdutor]);

  if (queryResult.rowCount === 0) {
    throw new AppError("Produtor or Propriedade not found", 404);
  }

  return queryResult.rows;
};

export default listProdutorPropriedadeService;
