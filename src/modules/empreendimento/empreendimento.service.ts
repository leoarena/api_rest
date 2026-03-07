import { prisma } from "../../db.js";

export function list() {
  return prisma.empreendimento.findMany();
}

export function getById(id: string) {
  return prisma.empreendimento.findUnique({
    where: { id },
  });
}
