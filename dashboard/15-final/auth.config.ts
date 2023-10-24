import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig = {
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        nextUrl.pathname = '/login';
        if (!isLoggedIn) return NextResponse.redirect(nextUrl);
        return true;
      } else if (isLoggedIn) {
        nextUrl.pathname = '/dashboard';
        return NextResponse.redirect(nextUrl);
      }

      return true;
    },
  },
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig;
