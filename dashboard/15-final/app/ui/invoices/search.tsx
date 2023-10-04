'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="min-w-md relative grow md:mr-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative flex h-10 items-center px-2 py-2">
        <MagnifyingGlassIcon className="h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="absolute inset-0 h-full w-full rounded-md border border-gray-300 bg-transparent pl-8 text-sm"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
    </div>
  );
}
