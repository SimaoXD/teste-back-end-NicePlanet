import { z } from "zod";
import { QueryResult } from "pg";
import { createPropriedadeSchema, propriedadeSchema, propriedadeWithoutCadastroRural } from "../schemas/propriedades.schemas";

type Propriedade = z.infer<typeof propriedadeSchema>;
type PropriedadeRequest = z.infer<typeof createPropriedadeSchema>;
type PropriedadeReturn = z.infer<typeof propriedadeWithoutCadastroRural>;
type PropriedadeResult = QueryResult<Propriedade>;

export { Propriedade, PropriedadeRequest, PropriedadeReturn, PropriedadeResult };
