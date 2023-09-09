import { z } from "zod";
import { QueryResult } from "pg";
import { createUsuarioSchema, usuarioSchema, usuarioWithoutPassword } from "../schemas/usuario.schemas";

type Usuario = z.infer<typeof usuarioSchema>;
type UsuarioRequest = z.infer<typeof createUsuarioSchema>;
type UsuarioReturn = z.infer<typeof usuarioWithoutPassword>;
type UsuarioResult = QueryResult<Usuario>;

export { Usuario, UsuarioRequest, UsuarioReturn, UsuarioResult };
