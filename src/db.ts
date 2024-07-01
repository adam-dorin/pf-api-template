import { PrismaClient } from "@prisma/client";


export let prisma: PrismaClient;
let clientInitialized = false;

export const initializeDbClient = (): void => {
  prisma = new PrismaClient();
  clientInitialized = true;
};