Steps for creating prisma

1. Define your database schema
   Open the schema.prisma file and define your first models. Check the docs if you need inspiration: https://pris.ly/ppg-init.

2. To connect to serverless database

   - Define 'directUrl' variables in schema.prisma
   - new PrismaClient with datasourceUrl object

3. Apply migrations
   Run the following command to create and apply a migration:
   npx prisma migrate dev --name init

4. Populate some data with seed.ts file
   npx prisma db seed

5. To access your database from a JavaScript/TypeScript app, you need to use Prisma ORM. Go here for step-by-step instructions: https://pris.ly/ppg-init
