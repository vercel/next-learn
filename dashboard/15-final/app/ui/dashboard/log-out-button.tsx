'use client';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex gap-2 rounded p-2 font-semibold hover:text-blue-600"
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Sign Out</div>
    </button>
  );
}
