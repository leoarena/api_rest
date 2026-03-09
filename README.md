# API de Gestão de Empreendimentos

## Descrição da solução

Esta é uma API REST para gerenciamento de **empreendimentos**, permitindo operações de CRUD (Create, Read, Update, Delete). A aplicação foi desenvolvida com **TypeScript**, utilizando **Express** para rotas, **Prisma** para acesso ao banco de dados PostgreSQL e **Zod** para validação de dados.

A API possui tratamento de erros centralizado e validações de dados via schema, garantindo que somente informações válidas sejam persistidas.

---

## Tecnologias utilizadas

- **Node.js** + **TypeScript**
- **Express** (framework web)
- **Prisma** (ORM) com **PostgreSQL**
- **Docker** (para facilitar o setup do banco de dados)
- **Zod** (validação de schemas e dados)
- **Vitest** + **Supertest** (testes automatizados)
- **ESModules** (import/export nativo do Node.js)

---

## Estrutura geral do projeto

```
.
├── dist/                          # Código transpilado pelo TypeScript
├── docker-compose.yml             # Configuração do Docker para PostgreSQL
├── .env
├── .gitignore
├── .nvmrc
├── package.json
├── package-lock.json
├── .prettierignore
├── prisma/                        # Configuração do banco e migrations
├── prisma.config.ts
├── README.md
├── src/                           # Código-fonte em TypeScript
│   ├── app.ts                     # Configuração do Express
│   ├── db.ts                      # Inicialização do Prisma
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
│   └── server.ts
├── tests/                         # Testes automatizados
│   ├── modules
│   │   └── empreendimento
│   │       └── empreendimento.routes.test.ts
│   └── setup.ts
├── tsconfig.json                  # Configuração do TypeScript
├── vitest.config.ts               # Configuração do Vitest
└── .vscode
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

1. **Clonar o projeto**

```bash
git clone <repositório>
cd api_rest
```

2. **Instalar versão do Node**

```bash
nvm install
nvm use
```

3. **Instalar dependências**

```bash
npm install
```

4. **Gerar arquivo com as variáveis de ambiente**

```bash
cp .env.example .env
```

5. **Rodar a aplicação em modo de desenvolvimento**

```bash
npm run dev
```

- O servidor ficará disponível em: `http://localhost:3000`

6. **Rodar os testes**

```bash
npm run test
```

### Outros comandos

**Gerenciar o banco**

```bash
npm run db:stop   # para o container
npm run db:down   # remove o container
npm run db:start  # inicia o banco
npm run db:reset  # apaga o banco, recria e aplica migrations
```

**Executar migrations**

```bash
npm run migrate
```

**Compilar o código TypeScript**

```bash
npm run build
```

**Iniciar o projeto compilado em JavaScript**

```bash
npm run start
```
