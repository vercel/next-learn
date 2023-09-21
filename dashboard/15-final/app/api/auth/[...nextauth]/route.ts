import NextAuth from 'next-auth';
import { authOptions } from '@/auth';

const handler = NextAuth(authOptions);
console.log('debugging handler', handler);
export { handler as GET, handler as POST };
