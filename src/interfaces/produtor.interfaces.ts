import { z } from "zod";
import { QueryResult } from "pg";
import { createProdutorSchema, ProdutorSchema, ProdutorWithoutCpf } from "../schemas/produtor.schemas";

type Produtor = z.infer<typeof ProdutorSchema>;
type ProdutorRequest = z.infer<typeof createProdutorSchema>;
type ProdutorReturn = z.infer<typeof ProdutorWithoutCpf>;
type ProdutorResult = QueryResult<Produtor>;

export { Produtor, ProdutorRequest, ProdutorReturn, ProdutorResult };
