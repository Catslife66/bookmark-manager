/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "bookmark-manager",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-1",
        },
      },
    };
  },
  async run() {
    const dbUrl = new sst.Secret("DATABASE_URL");
    const githubId = new sst.Secret("AUTH_GITHUB_ID");
    const githubSecret = new sst.Secret("AUTH_GITHUB_SECRET");

    const auth = new sst.aws.Auth("MyAuth", {
      issuer: {
        handler: "auth/index.handler",
        link: [dbUrl, githubId, githubSecret],
      },
    });
    new sst.aws.Nextjs("MyWeb", {
      link: [auth, dbUrl, githubId, githubSecret],
    });
  },
});
