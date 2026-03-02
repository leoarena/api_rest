import express from "express";
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Resposta mock");
});

app.listen(port, () => {
  console.log(`Aplicação escutando na porta ${port}`);
});
