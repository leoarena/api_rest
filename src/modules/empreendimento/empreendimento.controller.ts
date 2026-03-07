import { Request, Response, NextFunction } from "express";
import * as service from "./empreendimento.service.js";
import { Empreendimento, Prisma } from "@prisma/client";

type IdParam = { id: string };

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const empreendimentos: Empreendimento[] = await service.list();
    res.json(empreendimentos);
  } catch (error) {
    next(error);
  }
}

export async function getById(
  req: Request<IdParam>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const empreendimento: Empreendimento | null = await service.getById(id);
    if (!empreendimento) {
      return res.status(404).json({ error: "Empreendimento não encontrado" });
    }
    res.json(empreendimento);
  } catch (error) {
    next(error);
  }
}

export async function create(
  req: Request<{}, {}, Prisma.EmpreendimentoCreateInput>,
  res: Response,
  next: NextFunction,
) {
  try {
    const empreendimento: Empreendimento = await service.create(req.body);
    res.status(201).json(empreendimento);
  } catch (error) {
    next(error);
  }
}

export async function update(
  req: Request<IdParam, {}, Prisma.EmpreendimentoUpdateInput>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const empreendimento: Empreendimento = await service.update(id, req.body);
    res.json(empreendimento);
  } catch (error) {
    next(error);
  }
}

export async function remove(
  req: Request<IdParam>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    await service.remove(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
