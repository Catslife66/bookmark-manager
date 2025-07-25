import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Resource } from "sst";

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasourceUrl:
      process.env.DIRECT_DATABASE_URL || Resource.DATABASE_URL.value,
  }).$extends(withAccelerate());
};

const prisma = prismaClientSingleton();

export default prisma;
