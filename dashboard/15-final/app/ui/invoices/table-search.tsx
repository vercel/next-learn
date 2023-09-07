'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function TableSearch() {
  const { replace } = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="relative max-w-md flex-grow">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative flex items-center px-2 py-2">
        <MagnifyingGlassIcon className="h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          className="absolute inset-0 w-full rounded-md border border-gray-300 bg-transparent p-2 pl-8 text-sm"
        />
      </div>
      {isPending && <LoadingIcon />}
    </div>
  );
}

function LoadingIcon() {
  return (
    <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center">
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin text-gray-700"
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
