import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
