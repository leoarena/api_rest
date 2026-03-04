import { Router } from "express";
import { prisma } from "./db.js";

const router = Router();

router.get("/", async (request, response) => {
  const empreendimentos = await prisma.empreendimento.findMany();
  response.json(empreendimentos);
});

export { router };
