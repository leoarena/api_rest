import { Router } from "express";
import { prisma } from "./db.js";

const router = Router();

router.put("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const { nome, responsavel, municipio, segmento, contato, status } =
      request.body;

    const empreendimento = await prisma.empreendimento.update({
      where: { id },
      data: { nome, responsavel, municipio, segmento, contato, status },
    });

    response.json(empreendimento);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    await prisma.empreendimento.delete({ where: { id } });
    response.status(204).send();
  } catch (error) {
    next(error);
  }
});

export { router };
