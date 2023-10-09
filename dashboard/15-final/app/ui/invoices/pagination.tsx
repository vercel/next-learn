'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      {/* Previous Page Arrow */}
      <Link
        href={createPageURL(currentPage - 1)}
        className={clsx(
          'mr-2 flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-100 md:mr-4',
          {
            'pointer-events-none text-gray-300 hover:bg-transparent':
              currentPage === 1,
          },
        )}
      >
        <ArrowLeftIcon className="w-4" />
      </Link>
      <div className="flex -space-x-px ">
        {allPages.map((page, i) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${i}`}
                className="flex h-10 w-10 items-center justify-center text-sm ring-1 ring-inset ring-gray-300"
              >
                ...
              </span>
            );
          }

          const PageTag = page === currentPage || page === '...' ? 'p' : Link;
          return (
            <PageTag
              key={page}
              href={createPageURL(page)}
              className={clsx(
                i === 0 && 'rounded-l-md',
                i === allPages.length - 1 && 'rounded-r-md',
                'flex h-10 w-10 items-center justify-center text-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100',
                {
                  'z-10 bg-blue-600 text-white ring-blue-600 hover:bg-blue-600':
                    currentPage === page,
                },
              )}
            >
              {page}
            </PageTag>
          );
        })}
      </div>
      {/* Next Page Arrow */}
      <Link
        href={createPageURL(currentPage + 1)}
        className={clsx(
          'ml-2 flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-100 md:ml-4',
          {
            'text-gray-300': currentPage === totalPages,
          },
        )}
      >
        <ArrowRightIcon className="w-4" />
      </Link>
    </div>
  );
}
