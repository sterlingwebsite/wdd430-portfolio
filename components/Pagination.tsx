'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-8 py-4">
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          ← Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed dark:bg-gray-800/40 dark:text-gray-600 dark:border-gray-700">
          ← Previous
        </span>
      )}

      <span className="text-sm text-gray-700 dark:text-gray-300 px-4">
        Page <strong className="font-semibold">{currentPage}</strong> of{' '}
        <strong className="font-semibold">{totalPages}</strong>
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Next →
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed dark:bg-gray-800/40 dark:text-gray-600 dark:border-gray-700">
          Next →
        </span>
      )}
    </div>
  );
}
