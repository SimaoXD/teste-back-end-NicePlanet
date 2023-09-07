const app: Application = express();
app.use(json());

app.use("/produtores", produtorRouter);
app.use("/login", sessionRouter);
app.use("/propriedades".propriedadesRouter);

app.use(handleErrors);

export default app;
