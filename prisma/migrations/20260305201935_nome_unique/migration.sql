/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `empreendimentos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "empreendimentos_nome_key" ON "empreendimentos"("nome");
