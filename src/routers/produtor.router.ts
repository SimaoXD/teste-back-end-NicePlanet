import { Router } from "express";
import middlewares from "../middlewares";
import deletePropriedadeController from "../controllers/produtor.controllers";

import { createPropriedadeSchema } from "../schemas/propriedades.schemas";

export const produtorRouter: Router = Router();

produtorRouter.post("", middlewares.ensureDataIsValidMiddleware(createPropriedadeSchema), middlewares.validateUsernameExists);

produtorRouter.delete("/:id", deletePropriedadeController);
