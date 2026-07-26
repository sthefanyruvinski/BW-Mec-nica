import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {
        const password = credentials?.password as string | undefined;
        const passwordHash = process.env.ADMIN_PASSWORD_HASH;
        if (!password || !passwordHash) return null;

        const valid = await bcrypt.compare(password, passwordHash);
        if (!valid) return null;

        return { id: "admin", name: "Admin" };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.AUTH_SECRET,
});
