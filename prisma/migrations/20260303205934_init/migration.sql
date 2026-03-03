-- CreateTable
CREATE TABLE "empreendimentos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "segmento" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empreendimentos_pkey" PRIMARY KEY ("id")
);
