import { handle } from "hono/aws-lambda";
import { issuer } from "@openauthjs/openauth";
import { GithubProvider } from "@openauthjs/openauth/provider/github";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory";
import { subjects } from "./subjects";
import { Resource } from "sst";
import axios from "axios";
import prisma from "@/app/lib/db";

async function getUserId(email) {
  const existing = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  let user;
  if (existing) {
    user = existing;
  } else {
    user = await prisma.user.create({
      data: {
        email: email,
      },
    });
  }
  return user.id;
}

const app = issuer({
  subjects,

  // Remove after setting custom domain
  allow: async () => true,
  providers: {
    github: GithubProvider({
      clientID: Resource.AUTH_GITHUB_ID.value,
      clientSecret: Resource.AUTH_GITHUB_SECRET.value,
      scopes: ["read:user", "user:email"],
    }),
  },
  ttl: {
    access: 60 * 60 * 24 * 3,
    refresh: 60 * 60 * 24 * 7,
  },
  success: async (ctx, value) => {
    let userId;
    if (value.provider === "github") {
      const accessToken = value.tokenset.access;
      const res = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userEmail = res.data.email;
      userId = await getUserId(userEmail);
      console.log(userId);
    }

    return ctx.subject("user", {
      id: userId,
    });
  },
});

export const handler = handle(app);
