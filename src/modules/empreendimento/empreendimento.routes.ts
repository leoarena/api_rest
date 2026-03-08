import { Router } from "express";
import * as controller from "./empreendimento.controller.js";
import { validateIdParam } from "./empreendimento.middlewares.js";
import { validateBody } from "../../middlewares/validateBody.js";
import { EmpreendimentoCreateSchema } from "./empreendimento.schema.js";

const router = Router();

router.get("/", controller.list);
router.get("/:id", validateIdParam, controller.getById);
router.post("/", validateBody(EmpreendimentoCreateSchema), controller.create);
router.put("/:id", validateIdParam, controller.update);
router.delete("/:id", validateIdParam, controller.remove);

export default router;
