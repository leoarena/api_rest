import { Router } from "express";
import { prisma } from "./db.js";

const router = Router();

router.get("/", async (request, response) => {
  const empreendimentos = await prisma.empreendimento.findMany();
  response.json(empreendimentos);
});

router.post("/", async (request, response) => {
  try {
    const { nome, responsavel, municipio, segmento, contato, status } =
      request.body;

    const empreendimento = await prisma.empreendimento.create({
      data: { nome, responsavel, municipio, segmento, contato, status },
    });

    response.status(201).json(empreendimento);
  } catch (error: any) {
    if (error.code === "P2002") {
      return response
        .status(409)
        .json({ error: "Já existe um empreendimento com este nome" });
    }
    response.status(500).json({ error: "Erro ao cadastrar empreendimento" });
  }
});

export { router };
