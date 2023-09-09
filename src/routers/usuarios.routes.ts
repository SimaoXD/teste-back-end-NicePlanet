import { Router } from "express";
import middlewares from "../middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { deleteProdutorController, listProdutorPropriedadeController } from "../controllers/usuario.controllers";
import { createProdutorSchema } from "../schemas/produtor.schemas";

export const usuarioRouter: Router = Router();

usuarioRouter.post("", middlewares.ensureDataIsValidMiddleware(createProdutorSchema), middlewares.validateUsernameExists);

usuarioRouter.get("/:id", ensureTokenIsValidMiddleware, listProdutorPropriedadeController);

usuarioRouter.delete("/:id", deleteProdutorController);
