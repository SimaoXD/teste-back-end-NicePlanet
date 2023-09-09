import { hash } from "bcryptjs";
import format from "pg-format";
import { object } from "zod";
import { client } from "../../database";
import { ProdutorRequest, ProdutorResult, ProdutorReturn } from "../../interfaces/produtor.interfaces";
import { ProdutorWithoutCpf } from "../../schemas/produtor.schemas";

export const createProdutorService = async (produtorData: ProdutorRequest): Promise<ProdutorReturn> => {
  produtorData.cpfProdutor = await hash(produtorData.cpfProdutor, 10);

  const queryString: string = format(
    `
        INSERT INTO produtor (%I)
        VALUES(%L)
        RETURNING *
        `,
    Object.keys(produtorData),
    Object.values(produtorData)
  );

  const queryResult: ProdutorResult = await client.query(queryString);

  return ProdutorWithoutCpf.parse(queryResult.rows[0]);
};
