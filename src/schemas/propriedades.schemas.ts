import { z } from "zod";

const propriedadeSchema = z.object({
  id: z.number().positive(),
  nome: z.string().max(120),
  cadastroRural: z.string().max(50),
});

const createPropriedadeSchema = propriedadeSchema.omit({
  id: true,
});

export { propriedadeSchema, createPropriedadeSchema };
