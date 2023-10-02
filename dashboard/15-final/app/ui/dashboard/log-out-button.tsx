'use client';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2"
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Sign Out</div>
    </button>
  );
}
