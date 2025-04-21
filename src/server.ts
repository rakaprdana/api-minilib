import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/database";

dotenv.config();
const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT} and http://localhost:${PORT}/`);
  });
});
