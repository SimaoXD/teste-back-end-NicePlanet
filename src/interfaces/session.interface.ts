import { z } from "zod";
import { sessionSchema } from "../schemas/sessions.schemas";

export type SessionRequest = z.infer<typeof sessionSchema>;
