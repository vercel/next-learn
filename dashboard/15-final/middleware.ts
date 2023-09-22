import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     const session = req.cookies.has('next-auth.session-token');

//     if (
//       session &&
//       (req.nextUrl.pathname.startsWith('/login') || req.url.includes('/login'))
//     ) {
//       return NextResponse.redirect(new URL('/dashboard', req.url));
//     }

//     if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//     return NextResponse.next();
//   },
// );

// export const config = { matcher: ['/:path*'] };

export async function middleware(request: NextRequest) {
  const session = request.cookies.has('next-auth.session-token');

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
}
export const config = { matcher: ['/:path*'] };
