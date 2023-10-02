'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BackgroundBlur from '@/app/ui/background-blur';
import React, { useState } from 'react';
import Image from 'next/image';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { replace } = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid Credentials');
        return;
      }

      replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative mx-auto mt-40 p-4">
      <BackgroundBlur />

      <div className="mx-auto flex w-full flex-col items-center space-y-2 rounded-xl border bg-white px-4 py-6 shadow-sm sm:max-w-sm sm:space-y-4 sm:px-8 sm:py-12">
        <Link href="/">
          <Image
            width={40}
            height={40}
            src="/logo.png"
            alt="The Next.js Symbol, a white N inside a black circle"
          />
        </Link>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium leading-8 text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-200"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-sm font-medium leading-8 text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-200"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p
                aria-live="polite"
                className="mt-4 w-fit rounded-md py-1 text-sm text-red-500"
              >
                {error}
              </p>
            )}

            <button
              className="mt-7 w-full rounded-md bg-black px-4 py-2 text-center text-sm text-white outline-2 outline-offset-4 hover:bg-gray-800"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
