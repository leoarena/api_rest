import { Router } from "express";
import * as controller from "./empreendimento.controller.js";

const router = Router();

router.get("/", controller.list);
router.get("/:id", controller.getById);

export default router;
