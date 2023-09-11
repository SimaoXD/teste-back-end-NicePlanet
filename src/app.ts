import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { produtorRouter } from "./routers/produtor.router";
import sessionRouter from "./routers/session.router";
import handleErrors from "./middlewares/handleErrors";

const app: Application = express();
app.use(json());

app.use("/produtore", produtorRouter);
app.use("/login", sessionRouter);

app.use(handleErrors);

export default app;
