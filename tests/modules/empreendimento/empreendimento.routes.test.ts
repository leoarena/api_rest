import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../../src/app";

describe("GET /empreendimentos", () => {
  it("deve retornar lista de empreendimentos", async () => {
    const response = await request(app).get("/empreendimentos");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /empreendimentos/:id", () => {
  it("deve retornar um empreendimento", async () => {
    const empreendimento = await request(app).post("/empreendimentos").send({
      nome: "Teste GET",
      responsavel: "Responsavel",
      municipio: "Florianópolis",
      segmento: "Tecnologia",
      contato: "email@teste.com",
      status: "ativo",
    });

    const response = await request(app).get(
      `/empreendimentos/${empreendimento.body.id}`,
    );
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(empreendimento.body.id);
    expect(response.body.nome).toBe("Teste GET");
  });

  it("deve retornar 404 para ID inexistente", async () => {
    const response = await request(app).get("/empreendimentos/id-invalido");
    expect(response.status).toBe(404);
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

  it("deve rejeitar nome duplicado", async () => {
    const empreendimento = {
      nome: "Empreendimento duplicado",
      responsavel: "Responsavel",
      municipio: "Florianópolis",
      segmento: "Tecnologia",
      contato: "email@teste.com",
      status: "ativo",
    };

    await request(app).post("/empreendimentos").send(empreendimento);

    const response = await request(app)
      .post("/empreendimentos")
      .send(empreendimento);

    expect(response.status).toBe(409);
    expect(response.body).toHaveProperty("error");
  });

  it("deve rejeitar segmento inesperado", async () => {
    const empreendimento = {
      nome: "Teste segmento",
      responsavel: "Responsavel",
      municipio: "Florianópolis",
      segmento: "Outro",
      contato: "email@teste.com",
      status: "ativo",
    };

    const response = await request(app)
      .post("/empreendimentos")
      .send(empreendimento);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Dados inválidos");
    expect(response.body).toHaveProperty("detalhes");
    expect(response.body.detalhes[0]).toHaveProperty("campo", "segmento");
  });

  it("deve rejeitar status inesperado", async () => {
    const empreendimento = {
      nome: "Teste segmento",
      responsavel: "Responsavel",
      municipio: "Florianópolis",
      segmento: "Tecnologia",
      contato: "email@teste.com",
      status: "outro",
    };

    const response = await request(app)
      .post("/empreendimentos")
      .send(empreendimento);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Dados inválidos");
    expect(response.body).toHaveProperty("detalhes");
    expect(response.body.detalhes[0]).toHaveProperty("campo", "status");
  });
});

describe("PUT /empreendimentos/:id", () => {
  it("deve atualizar um empreendimento", async () => {
    const novo = await request(app).post("/empreendimentos").send({
      nome: "Antes",
      responsavel: "Resp Antes",
      municipio: "Florianópolis",
      segmento: "Tecnologia",
      contato: "antes@teste.com",
      status: "ativo",
    });

    const atualizado = {
      nome: "Depois",
      responsavel: "Resp Depois",
      municipio: "São Paulo",
      segmento: "Comércio",
      contato: "depois@teste.com",
      status: "inativo",
    };

    const response = await request(app)
      .put(`/empreendimentos/${novo.body.id}`)
      .send(atualizado);

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Depois");
    expect(response.body.responsavel).toBe("Resp Depois");
    expect(response.body.municipio).toBe("São Paulo");
  });
});

describe("DELETE /empreendimentos/:id", () => {
  it("deve deletar um empreendimento", async () => {
    const novo = await request(app).post("/empreendimentos").send({
      nome: "Para Deletar",
      responsavel: "Responsavel",
      municipio: "Florianópolis",
      segmento: "Tecnologia",
      contato: "email@teste.com",
      status: "ativo",
    });

    const response = await request(app).delete(
      `/empreendimentos/${novo.body.id}`,
    );
    expect(response.status).toBe(204);

    const verificar = await request(app).get(
      `/empreendimentos/${novo.body.id}`,
    );
    expect(verificar.status).toBe(404);
  });
});
