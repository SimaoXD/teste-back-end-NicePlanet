import { z } from "zod";

const usuarioSchema = z.object({
  idUsuario: z.number().positive(),
  nomeUsuario: z.string().max(50),
  senhaUsuario: z.string().max(120),
  active: z.boolean().default(true),
});

const createUsuarioSchema = usuarioSchema.omit({
  idUsuario: true,
  active: true,
});

const usuarioWithoutPassword = usuarioSchema.omit({
  senhaUsuario: true,
});

export { usuarioSchema, createUsuarioSchema, usuarioWithoutPassword };
