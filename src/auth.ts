import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
import { db } from '@/app/lib/db';
import { getUserById } from "./data/user";
  
export const { 
  handlers, 
  auth,
  signIn,
  signOut,
 } = NextAuth({
  callbacks: {
    async session ({ token, session }) {
      console.log({sessionToken: token});
      if ( token.sub && session.user) {
        session.user.id = token.sub;
      }
      console.log({sessionToken: token});
      return session;
    },
    async jwt ({ token }) {
      console.log(token);
      // !token.sub means currently logged out. token.sub is the id in database.
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.role = existingUser.role

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})