import express from "express";
import { router } from "./routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/empreendimentos", router);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
