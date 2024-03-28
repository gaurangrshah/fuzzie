import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    DATABASE_URL: z.string().min(1),
    DIRECT_URL: z.string().min(1),

    CLERK_SECRET_KEY: z.string().min(1),

    NOTION_REDIRECT_URI: z.string().min(1),
    SLACK_REDIRECT_URI: z.string().min(1),
    OAUTH2_REDIRECT_URI: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),

    NEXT_PUBLIC_URL: z.string().min(1),
    NEXT_PUBLIC_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_SCHEME: z.string().min(1),

    NEXT_PUBLIC_GOOGLE_SCOPES: z.string().min(1),
    NEXT_PUBLIC_OAUTH2_ENDPOINT: z.string().min(1),

    NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC: z.string().min(1),
    NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE: z.string().min(1),

    NEXT_PUBLIC_DISCORD_REDIRECT: z.string().min(1),
    NEXT_PUBLIC_NOTION_AUTH_URL: z.string().min(1),
    NEXT_PUBLIC_SLACK_REDIRECT: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,

    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_SCHEME: process.env.NEXT_PUBLIC_SCHEME,

    NEXT_PUBLIC_GOOGLE_SCOPES: process.env.NEXT_PUBLIC_GOOGLE_SCOPES,
    NEXT_PUBLIC_OAUTH2_ENDPOINT: process.env.NEXT_PUBLIC_OAUTH2_ENDPOINT,

    NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC:
      process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC,
    NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE:
      process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE,

    NEXT_PUBLIC_DISCORD_REDIRECT: process.env.NEXT_PUBLIC_DISCORD_REDIRECT,
    NEXT_PUBLIC_NOTION_AUTH_URL: process.env.NEXT_PUBLIC_NOTION_AUTH_URL,
    NEXT_PUBLIC_SLACK_REDIRECT: process.env.NEXT_PUBLIC_SLACK_REDIRECT,
  },
});
