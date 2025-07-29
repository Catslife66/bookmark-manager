/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "bookmark-manager",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const dbUrl = new sst.Secret("DATABASE_URL");
    const prismaUrl = new sst.Secret("PRISMA_CONNECT_URL");
    new sst.aws.Nextjs("MyWeb", {
      link: [dbUrl, prismaUrl],
    });
  },
});
