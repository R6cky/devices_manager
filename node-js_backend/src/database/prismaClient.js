import { PrismaClient } from "@prisma/client";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL + "?sslmode=require"}`;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prismaClient = new PrismaClient({ adapter });

export { prismaClient };
