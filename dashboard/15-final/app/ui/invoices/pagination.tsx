'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaginationButtons({
  totalPages,
  currentPage,
  searchParams,
}: {
  totalPages: number;
  currentPage: number;
  searchParams: { query: string; page: string };
}) {
  const pathname = usePathname();
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createPageUrl = (pageNumber: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', pageNumber.toString());
    return `${pathname}?${newSearchParams.toString()}`;
  };

  const PreviousPageTag = currentPage === 1 ? 'p' : Link;
  const NextPageTag = currentPage === totalPages ? 'p' : Link;

  return (
    <div className="inline-flex -space-x-px">
      <PreviousPageTag
        href={createPageUrl(currentPage - 1)}
        className={clsx(
          'flex h-9 w-9 items-center justify-center rounded-l-md ring-1 ring-inset ring-gray-300',
          {
            'text-gray-300': currentPage === 1,
          },
        )}
      >
        <ChevronLeftIcon className="w-4" />
      </PreviousPageTag>
      {pageNumbers.map((page) => {
        const PageTag = page === currentPage ? 'p' : Link;
        return (
          <PageTag
            key={page}
            href={createPageUrl(page)}
            className={clsx(
              'flex h-9 w-9 items-center justify-center text-sm ring-1 ring-inset ring-gray-300',
              {
                'z-10 bg-blue-600 text-white ring-blue-600':
                  currentPage === page,
              },
            )}
          >
            {page}
          </PageTag>
        );
      })}
      <NextPageTag
        href={createPageUrl(currentPage + 1)}
        className={clsx(
          'flex h-9 w-9 items-center justify-center rounded-r-md ring-1 ring-inset ring-gray-300',
          {
            'text-gray-300': currentPage === totalPages,
          },
        )}
      >
        <ChevronRightIcon className="w-4" />
      </NextPageTag>
    </div>
  );
}
