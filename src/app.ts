import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { SkripsiRoute } from "./routes/skripsi.route";
import { PKLRoute } from "./routes/pkl.route";
import { UserRoute } from "./routes/user.route";
import corsOptions from "./config/cors";
import { swaggerSpec } from "./docs/swagger";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/skripsi", SkripsiRoute);
app.use("/api/pkl", PKLRoute);
app.use("/api/auth", UserRoute);
export default app;
