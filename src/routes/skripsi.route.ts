import { Router } from "express";
import { SkripsiController } from "../controllers/skripsi.controller";

export const SkripsiRoute = Router();

SkripsiRoute.post("/", SkripsiController.addSkripsi);
SkripsiRoute.get("/", SkripsiController.getAllSkripsi);
SkripsiRoute.get("/:id", SkripsiController.getSkripsiById);
SkripsiRoute.put("/:id", SkripsiController.updatedSkripsi);
SkripsiRoute.delete("/:id", SkripsiController.deletedSkripsi); //soft    delete
