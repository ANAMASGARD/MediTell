import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
// This is particularly useful in development environments where the server is restarted frequently.
// In production, a new instance of PrismaClient is created each time the application starts,
// which is the expected behavior.
// This code is typically placed in a file like lib/prisma.js or lib/db.js,
// which is then imported wherever the database client is needed in your application.
