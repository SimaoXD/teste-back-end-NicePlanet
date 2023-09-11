import { Router } from "express";
import middlewares from "../middlewares";
import deletePropriedadeController from "../controllers/produtor.controllers";
import { createPropriedadeSchema } from "../schemas/propriedades.schemas";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import validateCpfExists from "../middlewares/validateUsernameExists";

export const produtorRouter: Router = Router();

produtorRouter.post(
  "",
  middlewares.ensureDataIsValidMiddleware(createPropriedadeSchema),
  middlewares.validateUsernameExists,
  validateCpfExists
);

produtorRouter.delete("/:produtorId/produtor/:propriedadeId", deletePropriedadeController, ensureTokenIsValidMiddleware);
