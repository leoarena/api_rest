import { prisma } from "../../db.js";
import type { Empreendimento, Prisma } from "@prisma/client";

export function list(): Promise<Empreendimento[]> {
  return prisma.empreendimento.findMany();
}

export function getById(id: string): Promise<Empreendimento | null> {
  return prisma.empreendimento.findUnique({
    where: { id },
  });
}

export function create(
  data: Prisma.EmpreendimentoCreateInput,
): Promise<Empreendimento> {
  return prisma.empreendimento.create({ data });
}

export function update(
  id: string,
  data: Prisma.EmpreendimentoUpdateInput,
): Promise<Empreendimento> {
  return prisma.empreendimento.update({
    where: { id },
    data,
  });
}

export function remove(id: string): Promise<Empreendimento> {
  return prisma.empreendimento.delete({ where: { id } });
}
