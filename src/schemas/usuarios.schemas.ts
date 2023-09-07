import { z } from "zod";

const usuarioSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  password: z.string().max(120),
});

const createUsuarioSchema = usuarioSchema.omit({
  id: true,
  active: true,
});

const usuarioWithoutPassword = usuarioSchema.omit({
  password: true,
});

export { usuarioSchema, createUsuarioSchema, usuarioWithoutPassword };
