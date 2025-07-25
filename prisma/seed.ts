import { PrismaClient } from "@prisma/client";
import { Resource } from "sst";

const prisma = new PrismaClient({
  datasourceUrl: Resource.DATABASE_URL.value,
});

async function main() {
  const bookmark = await prisma.bookmark.create({
    data: {
      title: "nextjs docs",
      url: "https://nextjs.org/",
      notes: "next.js",
      clerkId: "user_30EIfRxNpgSNOGjqjO1Ad2eQkQU",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
