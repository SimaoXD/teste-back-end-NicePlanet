CREATE TABLE IF NOT EXISTS produtores(
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR(50) NOT NULL,
    "CPF" VARCHAR(50) NOT NULL,

);

CREATE TABLE IF NOT EXISTS propriedades(
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR(110) NOT NULL,
    "cadastroRural" VARCHAR(150) NOT NULL,
)

CREATE TABLE IF NOT EXISTS usuarios(
    "idUsuarios" SERIAL PRIMARY KEY,
    "startAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "produtorId" INTEGER NOT NULL,
    FOREIGN KEY ("produtorId") REFERENCES "produtores"(id),
    propriedadesId INTEGER NOT NULL,
    FOREIGN KEY ("propriedadeId") REFERENCES "propriedades"(id),
)