import NextAuth from 'next-auth';
import { authOptions } from '@/auth';

export const runtime = 'edge'; // 'nodejs' is the default

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
