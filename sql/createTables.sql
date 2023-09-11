CREATE TABLE IF NOT EXISTS "Produtor"(
    "idProdutor" SERIAL PRIMARY KEY,
    "nomeProdutor" VARCHAR(50) NOT NULL,
    "cpfProdutor" VARCHAR(11) NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario")
            
);

CREATE TABLE IF NOT EXISTS "Proriedade"(
    "idProriedade" SERIAL PRIMARY KEY,
    "nomePropriedade" VARCHAR(110) NOT NULL,
    "cadastroRural" VARCHAR(150) NOT NULL,
    "idProdutor" INTEGER NOT NULL,
    FOREIGN KEY ("idProdutor") REFERENCES "Produtor"("idProdutor")
            ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "Usuario"(
    "idUsuario" SERIAL PRIMARY KEY,
    "nomeUsuario" VARCHAR(50) NOT NULL UNIQUE, 
    "senhaUsuario" VARCHAR(50) NOT NULL
);