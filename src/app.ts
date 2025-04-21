import express from "express";
import dotenv from "dotenv";
import { SkripsiRoute } from "./routes/skripsi.route";
import { PKLRoute } from "./routes/pkl.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/skripsi", SkripsiRoute);
app.use("/api/pkl/", PKLRoute);
export default app;
