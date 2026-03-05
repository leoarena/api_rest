import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error.code === "P2002") {
    return res
      .status(409)
      .json({ error: "Já existe um empreendimento com este nome" });
  }

  if (error.code === "P2025") {
    return res.status(404).json({ error: "Empreendimento não encontrado" });
  }

  console.error(error);
  res.status(500).json({ error: "Erro interno do servidor" });
};
