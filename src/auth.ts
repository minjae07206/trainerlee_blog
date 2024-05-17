import NextAuth, { type DefaultSession} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { UserRole } from "@prisma/client";
import authConfig from "./auth.config";
import { db } from '@/app/lib/db';
import { getUserById } from "./data/user";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";

declare module "next-auth" {
    interface Session {
      user: {
        role: UserRole;
      } & DefaultSession["user"]
  }
    interface User {
    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: "ADMIN" | "USER" | undefined;
  }
}

export const { 
  handlers, 
  auth,
  signIn,
  signOut,
 } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }){
      //Allow OAuth without verification
      if (account?.provider !== "credentials") return true;
      const existingUser = await getUserById(user.id);
      // prevent  sign in with email verification
      if (!existingUser?.emailVerified) return false;


      // Todo: Create 2FA check
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)
        if (!twoFactorConfirmation) {
          console.log(!twoFactorConfirmation)
          return false;
        }
        // Delete 2 factor authentication for next sign in
        await db.twoFactorConfirmation.delete({
          where: {id: twoFactorConfirmation.id}
        })
      }
      return true;
    },
    async session ({ token, session }) {
      console.log({sessionToken: token});
      if ( token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
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