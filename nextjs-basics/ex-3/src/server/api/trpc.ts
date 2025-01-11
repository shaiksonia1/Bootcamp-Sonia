import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
export const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
