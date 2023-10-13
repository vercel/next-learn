import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return !nextUrl.pathname.startsWith('/dashboard') || !!auth?.user;
    },
  },
  pages: { signIn: '/login' },
} satisfies NextAuthConfig;
