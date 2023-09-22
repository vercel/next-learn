'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const PreviousPageTag = currentPage === 1 ? 'p' : Link;
  const NextPageTag = currentPage === totalPages ? 'p' : Link;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

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
      {allPages.map((page) => {
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
