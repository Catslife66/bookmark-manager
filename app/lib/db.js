// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";

// const prismaClientSingleton = () => {
//   return new PrismaClient().$extends(withAccelerate());
// };

// const prisma = prismaClientSingleton();

// export default prisma;

import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
