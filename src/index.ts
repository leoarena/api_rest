import express from "express";
import { router } from "./routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/empreendimentos", router);

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
