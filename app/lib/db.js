import { PrismaClient } from "@prisma/client";
import { Resource } from "sst";

export const prisma = new PrismaClient({
  datasourceUrl: Resource.DATABASE_URL.value,
});

export default prisma;
