# Monitoramento de Produtores e Propriedades

Esta aplicação foi desenvolvida para permitir que os stakeholders possam monitorar produtores e propriedades. Ela oferece recursos para cadastrar novos stakeholders (usuários), gerenciar produtores e propriedades, e autenticar usuários para acessar os recursos protegidos.

## Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando as seguintes tecnologias e bibliotecas:

- TypeScript
- Express.js
- Bcrypt.js para hashing de senhas
- JSON Web Tokens (JWT) para autenticação
- PostgreSQL como banco de dados
- Dotenv para gerenciamento de variáveis de ambiente
- Outras bibliotecas auxiliares

## Requisitos

- Node.js (versão X.X.X)
- PostgreSQL (versão X.X.X)
- Yarn ou npm para gerenciamento de pacotes

## Configuração

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   Navegue até o diretório do projeto:
   ```

## 🚀 Funcionalidades

- Cadastro de stakeholders (usuários).
- Autenticação de usuários.
- Gerenciamento de produtores.

## 🛠️ Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- (Aqui você pode listar outras tecnologias/frameworks/bibliotecas utilizadas)

## 🚩 Rotas da Aplicação

### Usuários (Stakeholders)

- **POST** `/usuario`: Cadastra um novo stakeholder.
- **GET** `/usuario`: Retorna a lista de todos os stakeholders cadastrados.
- **DELETE** `/usuario

### Login

- **POST** `/login`: Autenticar um usuário e obter um token JWT válido para acesso aos recursos protegidos.

### Produtor

- **POST** `/produtor`: Cadastrar um novo produtor.
- **DELETE** `/produtor/:id`: Excluir um produtor por ID.
