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

Set up SST

1. install sst
   npx sst@latest init

2. setup IAM credentials and IAM policy to grant SST access
   - Create an IAM user for SST deployment
     By default, AWS credentials are in a file:
     ~/.aws/credentials on Linux, Unix, macOS
