'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function Search() {
  const [isPending, startTransition] = useTransition();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
          className="absolute inset-0 w-full rounded-md border border-gray-300 bg-transparent p-2 pl-8 text-sm"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.query || ''}
        />
      </div>
    </div>
  );
}
