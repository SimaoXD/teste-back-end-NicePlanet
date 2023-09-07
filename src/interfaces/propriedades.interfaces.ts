import { z } from "zod";
import { QueryResult } from "pg";

import { propriedadeSchema, createProjectSchema } from "../schemas";

type Propriedade = z.infer<typeof propriedadeSchema>;
type PropriedadeRequest = z.infer<typeof createProjectSchema>;
type PropriedadeResult = QueryResult<Propriedade>;

export { Propriedade, PropriedadeRequest, PropriedadeResult };
