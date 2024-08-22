import { PrismaClient } from "@prisma/client";
// import pg from "pg";
// import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL}`;
const prismaClient = new PrismaClient({ datasourceUrl: connectionString });

export { prismaClient };
