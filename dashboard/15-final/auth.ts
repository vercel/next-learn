import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import authConfig from './auth.config';

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
  ...authConfig,
  providers: [
    ...authConfig.providers,
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
});
