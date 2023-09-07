import { z } from "zod";
import { sessionSchema } from "";

export type SessionRequest = z.infer<typeof sessionSchema>;
