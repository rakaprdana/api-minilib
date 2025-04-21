import express from "express";
import dotenv from "dotenv";
import { SkripsiRoute } from "./routes/skripsi.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/skripsi", SkripsiRoute);
export default app;
