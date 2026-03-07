import { Router } from "express";
import { prisma } from "./db.js";

const router = Router();

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
