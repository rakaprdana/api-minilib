import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export const UserRoute = Router();

UserRoute.post("/signup", AuthController.signUp);
UserRoute.post("/signin", AuthController.signIn);
