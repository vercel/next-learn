import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { User } from '@/app/lib/definitions';
import { sql } from '@vercel/postgres';

async function getUser(email: string) {
  try {
    const user = await sql`SELECT * from USERS where email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign-In with Credentials',
      credentials: {
        password: { label: 'Password', type: 'password' },
        email: { label: 'Email', type: 'email' },
      },
      // @ts-ignore
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        const user = await getUser(email as string);

        if (!user || !password) {
          console.log('Missing credentials');
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          console.log('Invalid credentials');
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};
