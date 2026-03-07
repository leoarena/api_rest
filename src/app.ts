import express, { Request, Response } from "express";
import { router } from "./routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/empreendimentos", router);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.use(errorHandler);

export default app;
