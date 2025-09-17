import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation MiniLib",
      version: "1.0.0",
      description: "Dokumentasi API untuk User, PKL, dan Skripsi",
    },
    servers: [{ url: " http://localhost:8080/" }],
  },
  apis: ["./src/routes/*.ts", "./src/docs/swagger.yaml"],
};

export const swaggerSpec = swaggerJsdoc(options);
