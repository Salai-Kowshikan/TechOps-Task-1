import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma-client';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
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

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          type: userType,
          ...(userType === 'admin' && { is_admin: admin?.is_admin }),
        };
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
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
        token.type = user.type;
        if (user.type === 'admin' && user.is_admin !== undefined) {
          token.is_admin = user.is_admin;
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
            if ('phoneNumber' in dbUser && dbUser.phoneNumber) {
              token.phoneNumber = dbUser.phoneNumber;
            }
          } else {
            token.tempName = user.name || '';
            console.log(token.tempName);
            token.tempEmail = user.email || '';
            console.log(token.tempEmail)
            token.sub = user.id;
            console.log(token.sub);
            
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string || token.id as string;
        session.user.type = token.type as string || 'user';
        session.user.token = token.token as string;

        // Populate session with temporary data for new users
        session.user.name = token.tempName || session.user.name || '';
        session.user.email = token.tempEmail || session.user.email || '';
        session.user.phoneNumber = token.phoneNumber as string | undefined;

        // Add is_admin to session if user is admin
        if (token.type === 'admin') {
          session.user.is_admin = token.is_admin;
        }
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
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