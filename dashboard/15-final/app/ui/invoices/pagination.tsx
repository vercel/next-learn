'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function PaginationButtons({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  function onPageChange(page: number) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page.toString());

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="flex items-center justify-end mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border border-gray-300 rounded-l-md h-8 w-8 flex items-center justify-center"
        >
          <ChevronLeftIcon className="w-4" />
        </button>
        <>
          {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300'} border-y border-r text-sm h-8 w-8 flex items-center justify-center`}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
        </>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border border-gray-300 rounded-r-md border-l-0 h-8 w-8 flex items-center justify-center"
        >
          <ChevronRightIcon className="w-4" />
        </button>
    </div>
  );
}