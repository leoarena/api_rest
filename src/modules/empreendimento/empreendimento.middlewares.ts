import { Request, Response, NextFunction } from "express";

export function validateIdParam(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  next();
}
