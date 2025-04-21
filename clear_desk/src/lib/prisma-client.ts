import { PrismaClient } from "./prisma"; 

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
