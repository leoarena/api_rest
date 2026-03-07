import { prisma } from "../../db.js";

export function list() {
  return prisma.empreendimento.findMany();
}

export function getById(id: string) {
  return prisma.empreendimento.findUnique({
    where: { id },
  });
}

export function create(data: any) {
  return prisma.empreendimento.create({ data });
}

export function update(id: string, data: any) {
  return prisma.empreendimento.update({
    where: { id },
    data,
  });
}

export function remove(id: string) {
  return prisma.empreendimento.delete({ where: { id } });
}
