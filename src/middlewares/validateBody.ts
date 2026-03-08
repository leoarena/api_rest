import { ZodError, ZodType } from "zod";
import { Request, Response, NextFunction } from "express";

export function validateBody<T extends ZodType<any>>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const detalhes = error.issues.map((e) => ({
          campo: e.path[0],
          mensagem: e.message,
        }));

        return res.status(400).json({
          error: "Dados inválidos",
          detalhes,
        });
      }

      next(error);
    }
  };
}
