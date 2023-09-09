import { z } from "zod";

const propriedadeSchema = z.object({
  idPropriedade: z.number().positive(),
  nomePropriedade: z.string().max(120),
  cadastroRural: z.string().max(50),
  active: z.boolean().default(true),
});

const createPropriedadeSchema = propriedadeSchema.omit({
  idPropriedade: true,
  active: true,
});

const propriedadeWithoutCadastroRural = propriedadeSchema.omit({
  cadastroRural: true,
});

export { propriedadeSchema, createPropriedadeSchema, propriedadeWithoutCadastroRural };
