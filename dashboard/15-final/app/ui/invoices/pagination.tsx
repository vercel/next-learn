'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
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
    <div className="inline-flex">
      <PreviousPageTag
        href={createPageUrl(currentPage - 1)}
        className={clsx(
          'mr-4 flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-inset ring-gray-300 hover:opacity-60',
          {
            'text-gray-300': currentPage === 1,
          },
        )}
      >
        <ArrowLeftIcon className="w-4" />
      </PreviousPageTag>
      <div className="flex -space-x-px ">
        {allPages.map((page, i) => {
          const PageTag = page === currentPage ? 'p' : Link;
          return (
            <PageTag
              key={page}
              href={createPageUrl(page)}
              className={clsx(
                i === 0 && 'rounded-l-md',
                i === allPages.length - 1 && 'rounded-r-md',
                'flex h-10 w-10 items-center justify-center text-sm ring-1 ring-inset ring-gray-300',
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
      </div>
      <NextPageTag
        href={createPageUrl(currentPage + 1)}
        className={clsx(
          'ml-4 flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-inset ring-gray-300 hover:opacity-60',
          {
            'text-gray-300': currentPage === totalPages,
          },
        )}
      >
        <ArrowRightIcon className="w-4" />
      </NextPageTag>
    </div>
  );
}
