import { beforeEach } from "vitest";
import { prisma } from "../src/db.js";

beforeEach(async () => {
  await prisma.empreendimento.deleteMany();
});
