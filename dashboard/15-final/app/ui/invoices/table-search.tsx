'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function TableSearch({ disabled }: { disabled?: boolean }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(window.location.search);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="relative mb-5 max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative flex items-center py-2 px-2 mt-8">
        <MagnifyingGlassIcon className="h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          className="absolute pl-8 bg-transparent inset-0 border p-2 w-full rounded-md border-gray-300 text-sm"
        />
      </div>
      {isPending && <LoadingIcon />}
    </div>
  );
}

function LoadingIcon() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}