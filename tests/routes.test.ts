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
