import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Application schema
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  college: text("college").notNull(),
  year: text("year").notNull(),
  preference1: text("preference1").notNull(),
  preference2: text("preference2").notNull(),
  preference3: text("preference3").notNull(),
  resumeLink: text("resumeLink").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;

// Extended schema with validations for the form
export const applicationFormSchema = insertApplicationSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  college: z.string().min(2, { message: "College name is required" }),
  year: z.enum(["SY", "TY"], { 
    message: "Please select either SY or TY" 
  }),
  preference1: z.string().min(1, { message: "First preference is required" }),
  preference2: z.string().min(1, { message: "Second preference is required" }),
  preference3: z.string().min(1, { message: "Third preference is required" }),
  resumeLink: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .includes("drive.google.com", { message: "Please enter a Google Drive link" })
});
