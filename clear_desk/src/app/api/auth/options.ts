import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from '@/lib/prisma-client';
import bcrypt from 'bcryptjs';
import NextAuth from "next-auth";
import { User } from "next-auth";

// Extend the built-in User type
interface CustomUser extends User {
  id: string;
  email: string;
  name: string;
  type: string;
  is_admin: boolean; // Make this non-optional
  token?: string;
  phoneNumber?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        let user = null;
        let userType = 'user';
        let admin = null;
        
        user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          admin = await prisma.admin.findUnique({
            where: { email: credentials.email },
          });
          
          if (admin) {
            user = admin;
            userType = 'admin';
          }
        }

        if (!user) {
          throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(credentials.password, user.password || '');
        if (!isMatch) {
          throw new Error('Invalid password');
        }

        // Make sure is_admin has a default value to satisfy the type requirements
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          type: userType,
          is_admin: userType === 'admin' ? !!admin?.is_admin : false,
          // Add any other fields required by User interface
          image: null,
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && user.email) {
        const userInUsersTable = await prisma.users.findUnique({
          where: { email: user.email },
        });

        const userInAdminTable = await prisma.admin.findUnique({
          where: { email: user.email },
        });

        if (!userInUsersTable && !userInAdminTable) {
          return '/gregister';
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.type = (user as CustomUser).type;
        token.is_admin = (user as CustomUser).is_admin;
        if ((user as CustomUser).token) {
          token.token = (user as CustomUser).token;
        }
        if ((user as CustomUser).phoneNumber) {
          token.phoneNumber = (user as CustomUser).phoneNumber;
        }
        
        if (account?.provider === 'google' && user.email) {
          let dbUser = await prisma.users.findUnique({
            where: { email: user.email },
          });
          let userType = 'user';

          if (!dbUser) {
            dbUser = await prisma.admin.findUnique({
              where: { email: user.email },
            });
            userType = 'admin';
          }
          
          if (dbUser) {
            token.id = dbUser.id.toString();
            token.type = userType;
            if (dbUser.token) token.token = dbUser.token;
            if ('ph_number' in dbUser && dbUser.ph_number) {
              token.phoneNumber = dbUser.ph_number;
            }
          } else {
            token.tempName = user.name || '';
            token.tempEmail = user.email || '';
            token.sub = user.id;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.sub as string) || (token.id as string);
        session.user.email = token.email as string;
        session.user.name = (token.name as string) || (token.tempName as string) || '';
        session.user.type = (token.type as string) || 'user';
        if (token.is_admin !== undefined) {
          session.user.is_admin = token.is_admin as boolean;
        }
        if (token.token) {
          session.user.token = token.token as string;
        }
        if (token.phoneNumber) {
          session.user.phoneNumber = token.phoneNumber as string;
        }
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, 
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
