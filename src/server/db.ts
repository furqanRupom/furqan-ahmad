import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global { }
  }
}

interface CustomNodeJSGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJSGlobal;
export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
}

