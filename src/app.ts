import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/produtores", produtorRouter);
app.use("/login", sessionRouter);
app.use("/propriedades".propriedadesRouter);

app.use(handleErrors);

export default app;
