import { z } from "zod";

export const sessionSchema = z.object({
  nomeUsuario: z.string().max(50),
  senhaUsuario: z.string().max(11),
});
