'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      if (res.error) {
        setError('Invalid Credentials');
        return;
      }

      router.replace('dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded-lg border-t-4 border-green-400 p-5 shadow-lg">
        <h1 className="my-4 text-xl font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="cursor-pointer bg-green-600 px-6 py-2 font-bold text-white">
            Login
          </button>
          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}

          <Link className="mt-3 text-right text-sm" href={'/register'}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

// 'use client';

// import BackgroundBlur from '@/app/ui/background-blur';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { signIn } from 'next-auth/react';

// // This component contains basic logic for a React Form.
// // We'll be updating it in Chapter 8 - Adding Authentication.

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(`Email: ${email}, Password: ${password}`);
//   };

//   return (
//     <div className="relative mx-auto mt-40 p-4">
//       <BackgroundBlur />

//       <div className="mx-auto flex w-full flex-col items-center space-y-2 rounded-xl border bg-white px-4 py-6 shadow-sm sm:max-w-sm sm:space-y-4 sm:px-8 sm:py-12">
//         <Link href="/">
//           <Image width={40} height={40} src="/logo.png" alt="Next.js Logo" />
//         </Link>
//         <div className="w-full">
//           <button
//             onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
//           >
//             Sign in with Github
//           </button>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label
//                 className="block text-sm font-medium leading-8 text-gray-900"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 className="block text-sm font-medium leading-8 text-gray-900"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="mt-8">
//               <button
//                 className="w-full rounded-md bg-black py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800"
//                 type="submit"
//               >
//                 Log in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
