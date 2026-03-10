# API para Gestão de Empreendimentos em SC

## Descrição da solução

Esta é uma API REST para gerenciamento de **empreendimentos em SC**, permitindo operações de CRUD (Create, Read, Update, Delete). A aplicação foi desenvolvida com **TypeScript**, utilizando **Express** para rotas, **Prisma** para acesso ao banco de dados PostgreSQL e **Zod** para validação de dados.

A API possui tratamento de erros centralizado e validações de dados via schema, garantindo que somente informações válidas sejam persistidas.

---

## Tecnologias utilizadas

- **Node.js** + **TypeScript** – linguagem e runtime
- **Express** – framework web
- **Prisma** – ORM para PostgreSQL
- **PostgreSQL** – banco de dados relacional
- **Docker** – para facilitar o setup do banco
- **Zod** – validação de schemas e dados
- **CORS** – habilitação de requisições cross-origin
- **dotenv** – carregamento de variáveis de ambiente
- **Vitest** + **Supertest** – testes automatizados
- **Prettier** – formatação de código
- **TSX** – execução de TypeScript em modo watch
- **ESModules** – import/export nativo do Node.js

---

## Estrutura geral do projeto

```
.
├── dist/                          # Código transpilado pelo TypeScript
├── docker-compose.yml             # Configuração do Docker para PostgreSQL
├── .env                           # Variáveis de ambiente locais
├── .env.example                   # Modelo de arquivo de variáveis de ambiente
├── .gitignore                     # Arquivos e pastas ignorados pelo Git
├── .nvmrc                         # Versão do Node.js utilizada no projeto
├── package.json                   # Dependências e scripts do projeto
├── package-lock.json              # Versões exatas das dependências
├── .prettierignore                # Arquivos ignorados pelo Prettier
├── prisma/                        # Configuração do banco e migrations
│   ├── migrations/                # Histórico de migrations aplicadas
│   └── schema.prisma              # Definição do modelo do banco
├── prisma.config.ts               # Configuração adicional do Prisma
├── README.md                      # Documentação do projeto
├── src/                           # Código-fonte em TypeScript
│   ├── app.ts                     # Configuração do Express
│   ├── db.ts                      # Inicialização do Prisma Client
│   ├── middlewares/               # Middlewares da aplicação
│   │   ├── errorHandler.ts        # Tratamento central de erros
│   │   └── validateBody.ts        # Validação de body via Zod
│   ├── modules
│   │   └── empreendimento          # Módulo de empreendimentos
│   │       ├── empreendimento.controller.ts
│   │       ├── empreendimento.middlewares.ts
│   │       ├── empreendimento.routes.ts
│   │       ├── empreendimento.schema.ts
│   │       └── empreendimento.service.ts
│   └── server.ts                  # Inicialização do servidor
├── tests/                         # Testes automatizados
│   ├── modules
│   │   └── empreendimento
│   │       └── empreendimento.routes.test.ts
│   └── setup.ts                   # Configuração global de testes
├── tsconfig.json                  # Configuração do TypeScript
├── vitest.config.ts               # Configuração do Vitest
└── .vscode                        # Configurações do VS Code (opcional)
    ├── extensions.json
    └── settings.json
```

---

## Instruções de execução

### Pré-requisitos

- Node.js v24.14.0 (recomendado: use nvm para gerenciar a versão)
- Docker e Docker Compose
- npm

### Passos

1. **Clonar o repositório**

```bash
git clone <repositório>
cd api_rest
```

2. **Instalar a versão do Node**

```bash
nvm install
nvm use
```

3. **Instalar dependências**

```bash
npm install
```

4. **Criar arquivo com as variáveis de ambiente**

```bash
cp .env.example .env
```

5. **Rodar a aplicação em modo de desenvolvimento**

```bash
npm run dev
```

Este comando executa automaticamente:

- inicialização do banco de dados com Docker
- aplicação das migrations do Prisma
- verificação de tipos do TypeScript
- inicialização do servidor em modo watch

O servidor ficará disponível em: `http://localhost:3000`

6. **Rodar os testes**

```bash
npm run test
```

### Outros comandos

#### Banco de dados (Docker)

```bash
npm run db:stop   # para o container
npm run db:down   # remove o container
npm run db:start  # inicia o banco
npm run db:reset  # apaga o banco, recria e aplica migrations
```

#### Migrations (Prisma)

Cria e aplica migrations no banco de dados durante o desenvolvimento

```bash
npm run migrate
```

Aplica migrations existentes (para produção)

```bash
npm run migrate:deploy
```

#### Build

Compila o código TypeScript para JavaScript na pasta `dist`

```bash
npm run build
```

Inicia a aplicação usando o código compilado em JavaScript

```bash
npm run start
```

### Vídeo

[Link do vídeo de apresentação](https://drive.google.com/file/d/1TT_UcXD4mvbZiOQtwMYEx5zGaSxUF8vQ/view?usp=sharing)
