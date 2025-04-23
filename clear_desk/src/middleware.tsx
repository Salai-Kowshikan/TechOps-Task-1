import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const PUBLIC_ROUTES = [
  '/api/auth',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/gregister',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log('🛡 Middleware executing for:', pathname);
  console.log('🍪 Cookies:', request.cookies.getAll());

  if (
    PUBLIC_ROUTES.some(route => pathname.startsWith(route)) ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName: 'next-auth.session-token', // Updated to match NextAuth's default session token
  });

  console.log('🔑 Token:', token, 'Type:', typeof token, 'Properties:', {
    sub: token?.sub,
    email: token?.email,
    id: token?.id,
  });

  // Check for token and a required property (e.g., sub)
  if (!token || !token.sub) {
    console.log('🚫 Invalid or missing token, redirecting to login');
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  console.log('✅ Valid token, proceeding');
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/user/dashboard',
    '/user/:path*',
    '/Admin/:path*',
  ],
};