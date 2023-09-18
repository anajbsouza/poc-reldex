import { enterpriseController } from "../controllers/enterprise.controller";
import { Router } from "express";

const enterpriseRouter = Router();

enterpriseRouter.post("/enterprise", enterpriseController.createEnterprises);
enterpriseRouter.get("/enterprise/:id", enterpriseController.readEnterpriseById);
enterpriseRouter.put("/enterprise/:id", enterpriseController.updateEnterprises);
enterpriseRouter.delete("/enterprise/:id", enterpriseController.deleteEnterprises);

export default enterpriseRouter;