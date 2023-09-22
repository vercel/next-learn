import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(request: NextRequest) {
    const session = request.cookies.has('next-auth.session-token');
    console.log('session', session);
    if (
      session &&
      (request.nextUrl.pathname.startsWith('/login') ||
        request.url.includes('/login'))
    ) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log('authorized', token);
        return token ? true : true;
      },
    },
  },
);
