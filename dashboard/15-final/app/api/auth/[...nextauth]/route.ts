import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
// import bcrypt from 'bcryptjs';
import { fetchUser } from '../../../lib/data';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await fetchUser(email);

          if (!user) {
            return null;
          }

          // const passwordsMatch = await bcrypt.compare(password, user.password);

          // if (!passwordsMatch) {
          //   return null;
          // }

          return user;
        } catch (error) {
          console.log('Error: ', error);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
