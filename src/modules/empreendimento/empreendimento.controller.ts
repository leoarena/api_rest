import { Request, Response, NextFunction } from "express";
import * as service from "./empreendimento.service.js";

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const empreendimentos = await service.list();
    res.json(empreendimentos);
  } catch (error) {
    next(Error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    if (Array.isArray(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const empreendimento = await service.getById(id);

    if (!empreendimento) {
      return res.status(404).json({ error: "Empreendimento não encontrado" });
    }

    res.json(empreendimento);
  } catch (error) {
    next(error);
  }
}
