import { Router } from "express";
import { PKLController } from "../controllers/pkl.controller";

export const PKLRoute = Router();

PKLRoute.post("/", PKLController.addNewPKL);
PKLRoute.get("/", PKLController.getAllPKL);
PKLRoute.get("/:id", PKLController.getPKLById);
PKLRoute.put("/:id", PKLController.updatedPKL);
PKLRoute.delete("/:id", PKLController.deletedPKL);
