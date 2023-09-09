import { hash } from "bcryptjs";
import format from "pg-format";
import { object } from "zod";
import { client } from "../../database";
import { PropriedadeRequest, PropriedadeResult, PropriedadeReturn } from "../../interfaces/propriedade.interfaces";
import { propriedadeWithoutCadastroRural } from "../../schemas/propriedades.schemas";

export const createPropriedadeService = async (PropriedadeData: PropriedadeRequest): Promise<PropriedadeReturn> => {
  PropriedadeData.cadastroRural = await hash(PropriedadeData.cadastroRural, 20);

  const queryString: string = format(
    `
        INSERT INTO Propriedade (%I)
        VALUES(%L)
        RETURNING *
        `,
    Object.keys(PropriedadeData),
    Object.values(PropriedadeData)
  );

  const queryResult: PropriedadeResult = await client.query(queryString);

  return propriedadeWithoutCadastroRural.parse(queryResult.rows[0]);
};
