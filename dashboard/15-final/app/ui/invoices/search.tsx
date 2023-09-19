'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';

export default function Search({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
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
          value={searchParams.query || ''}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="absolute inset-0 w-full rounded-md border border-gray-300 bg-transparent p-2 pl-8 text-sm"
        />
      </div>
    </div>
  );
}
