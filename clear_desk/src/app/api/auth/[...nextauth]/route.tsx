import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      const dbUser = await prisma.users.findUnique({
        where: { email: user.email },
      });

      if (!dbUser) {
        return '/gregister';
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user && user.email) {
        const dbUser = await prisma.users.findUnique({
          where: { email: user.email },
        });

        if (!dbUser) {
          token.tempName = user.name;
          token.tempEmail = user.email;
        } else {
          token.id = dbUser.id;

          if (dbUser.token) token.token = dbUser.token;

          if (dbUser.phoneNumber) {
            token.phoneNumber = dbUser.phoneNumber;
          }
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.token = token.token;

        if (token.tempName) session.user.name = token.tempName;
        if (token.tempEmail) session.user.email = token.tempEmail;

        if (token.phoneNumber) {
          session.user.phoneNumber = token.phoneNumber;
        }
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
