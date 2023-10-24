import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import { NextResponse } from 'next/server';

async function getUser(email: string) {
  try {
    const user = await sql<User>`SELECT * from USERS where email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      name: 'Sign-In with Credentials',
      credentials: {
        password: { label: 'Password', type: 'password' },
        email: { label: 'Email', type: 'email' },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        // @ts-expect-error TODO: Validate email type with zod
        const user = await getUser(email);
        if (!user || !password) {
          console.log('Missing credentials');
          return null;
        }

        // @ts-expect-error TODO: Validate password type with zod
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          console.log('Invalid credentials');
          return null;
        }

        return { ...user, id: user.id.toString() };
      },
    }),
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
});
