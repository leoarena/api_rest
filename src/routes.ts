import { Router } from "express";
import { prisma } from "./db.js";

const router = Router();

router.get("/", async (request, response) => {
  const empreendimentos = await prisma.empreendimento.findMany();
  response.json(empreendimentos);
});

router.post("/", async (request, response) => {
  const { nome, responsavel, municipio, segmento, contato, status } =
    request.body;

  const empreendimento = await prisma.empreendimento.create({
    data: { nome, responsavel, municipio, segmento, contato, status },
  });

  response.status(201).json(empreendimento);
});

export { router };
