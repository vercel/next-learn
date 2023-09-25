import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { getSession } from 'next-auth/react';

// export default withAuth(
//   async function middleware(req) {
//     const session = req.nextauth.token;
//     console.log('session', session);
//     if (session && req.nextUrl.pathname.startsWith('/login')) {
//       return NextResponse.redirect(new URL('/dashboard', req.url));
//     } else if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
//       return NextResponse.redirect(new URL('/login', req.url));
//     } else {
//       return NextResponse.next();
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         console.log('authorized', token);
//         return token ? true : true;
//       },
//     },
//   },
// );
// export { default } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const session = req.nextauth.token;
    console.log(req);
    if (session && req.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  },
  // {
  //   callbacks: {
  //     authorized: (req) => {
  //       console.log('authorized', req);
  //       return true;
  //     },
  //   },
  // },
);

export const config = { matcher: ['/dashboard/:path*', '/login/:path*'] };
