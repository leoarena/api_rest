import express from "express";
import request from "supertest";
import { router } from "../src/routes.js";
import { describe, it, expect } from "vitest";

const app = express();
app.use(express.json());
app.use("/empreendimentos", router);

describe("GET /empreendimentos", () => {
  it("deve retornar lista de empreendimentos", async () => {
    const response = await request(app).get("/empreendimentos");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("POST /empreendimentos", () => {
  it("deve retornar o empreendimento", async () => {
    const novoEmpreendimento = {
      nome: "Empreendimento teste",
      responsavel: "Responsavel teste",
      municipio: "Florianópolis",
      segmento: "Tecnologia",
      contato: "email@teste.com",
      status: "ativo",
    };

    const response = await request(app)
      .post("/empreendimentos")
      .send(novoEmpreendimento);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.nome).toBe(novoEmpreendimento.nome);
    expect(response.body.responsavel).toBe(novoEmpreendimento.responsavel);
    expect(response.body.municipio).toBe(novoEmpreendimento.municipio);
    expect(response.body.segmento).toBe(novoEmpreendimento.segmento);
    expect(response.body.contato).toBe(novoEmpreendimento.contato);
    expect(response.body.status).toBe(novoEmpreendimento.status);
  });
});
