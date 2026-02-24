import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const demoUserEmail = process.env.DEMO_USER_EMAIL ?? "demo@example.com";
const demoUserPassword = process.env.DEMO_USER_PASSWORD ?? "demo123";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        if (
          credentials.email === demoUserEmail &&
          credentials.password === demoUserPassword
        ) {
          return {
            id: "1",
            name: "Demo User",
            email: demoUserEmail,
          };
        }

        return null;
      },
    }),
  ],
};
