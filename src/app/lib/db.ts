import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

//The reason for using globalThis.prisma is because in development mode, otherwise too many
// PrismaClient will be created. 

if (process.env.NODE_ENV !== "production") globalThis.prisma = db