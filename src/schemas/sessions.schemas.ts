import { z } from "zod";

export const sessionSchema = z.object({
  id: z.number().positive(),
  password: z.string().max(120),
});
