import { z } from "zod";

export const sessionSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  cpf: z.number().max(11),
});
