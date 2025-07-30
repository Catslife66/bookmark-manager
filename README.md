# Bookmark Manager

A full-stack application for managing bookmarks.  
This project demonstrates CRUD, authentication via Clerk, and deployment with SST to AWS.

## Features

- Add, edit, and delete bookmarks
- User authentication with NextAuth
- PostgreSQL database hosted on Neon
- Prisma ORM for schema and migrations
- CI/CD with GitHub Actions
- Deployed serverlessly with SST + AWS Lambda

## Tech Stack

- Frontend: Next.js (App Router)
- Backend: SST (Serverless Stack)
- Database: Neon (PostgreSQL)
- ORM: Prisma
- Auth: NextAuth
- Deployment: AWS Lambda via SST
- CI/CD: GitHub Actions

---

## Setup prisma

1. Define your database schema
   Open the schema.prisma file and define your first models. Check the docs if you need inspiration: https://pris.ly/ppg-init.

2. To connect to serverless database
   Add "previewFeatures" flag to use Neon serverless driver.
   https://www.prisma.io/docs/orm/overview/databases/neon#how-to-use-neons-serverless-driver-with-prisma-orm-preview

3. Apply migrations
   Run the following command to create and apply a migration:
   npx prisma migrate dev --name init

4. Populate some data with seed.ts file
   npx prisma db seed

5. To access database from a JavaScript/TypeScript app, you need to use Prisma ORM. Go here for step-by-step instructions: https://pris.ly/ppg-init

---

## Setup SST

1. install sst
   npx sst@latest init

2. setup IAM credentials and IAM policy to grant SST access
   Create an IAM user for SST deployment
   By default, AWS credentials are in a file: ~/.aws/credentials on Linux, Unix, macOS
   Specify aws region in sst.config.ts

3. set SST secrets

   - npx sst secret set SECRET_NAME SECRET_VALUE
   - link the secrets in sst.config.ts
   - run 'npx sst dev' or 'npx sst deploy' to update the secret

4. run deploy to aws cloudfront
   npx sst deploy --stage production
