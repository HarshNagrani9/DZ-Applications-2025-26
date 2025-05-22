import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { applicationFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to save application
  app.post("/api/applications", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = applicationFormSchema.parse(req.body);
      
      // Just return success for now (the actual Firebase saving happens in the client)
      res.status(201).json({
        message: "Application submitted successfully",
        id: "client-side-firebase"
      });
    } catch (error) {
      res.status(400).json({
        message: "Invalid application data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
