'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function PaginationButtons({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createPageUrl = (pageNumber: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', pageNumber.toString());
    return `${pathname}?${newSearchParams.toString()}`;
  };

  const PreviousPageTag = currentPage === 1 ? 'p' : Link;
  const NextPageTag = currentPage === totalPages ? 'p' : Link;

  return (
    <div className="flex items-center justify-end">
      <PreviousPageTag
        href={createPageUrl(currentPage - 1)}
        className={clsx(
          'flex h-8 w-8 items-center justify-center rounded-l-md border border-gray-300',
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
              'flex h-8 w-8 items-center justify-center border-y border-r border-gray-300 text-sm',
              {
                'border-blue-600 bg-blue-600 text-white': currentPage === page,
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
          'flex h-8 w-8 items-center justify-center rounded-r-md border border-l-0 border-gray-300',
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
