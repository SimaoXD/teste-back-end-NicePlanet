import { Router } from "express";
import middlewares from "../middlewares";

import sessionController from "../controllers/session.controllers";
import { sessionSchema } from "../schemas/sessions.schemas";

const sessionRouter: Router = Router();

sessionRouter.post("", middlewares.ensureDataIsValidMiddleware(sessionSchema), sessionController);

export default sessionRouter;
