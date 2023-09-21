// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// export async function middleware(request: NextRequest) {
//   const session = request.cookies.has('next-auth.session-token');

//   if (session && (request.nextUrl.pathname.startsWith('/login') || request.url.includes('/login'))) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }

// export const config = { matcher: ['/(dashboard.*)', '/login'] };
export { default } from 'next-auth/middleware';

export const config = { matcher: ['/(dashboard.*)'] };
