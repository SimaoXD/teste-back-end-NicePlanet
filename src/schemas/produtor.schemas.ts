import { z } from "zod";

const ProdutorSchema = z.object({
  idProdutor: z.number().positive(),
  nameProdutor: z.string().max(50),
  cpfProdutor: z.string().max(120),
});

const createProdutorSchema = ProdutorSchema.omit({
  idProdutor: true,
});

const ProdutorWithoutCpf = ProdutorSchema.omit({
  cpfProdutor: true,
});

export { ProdutorSchema, createProdutorSchema, ProdutorWithoutCpf };
