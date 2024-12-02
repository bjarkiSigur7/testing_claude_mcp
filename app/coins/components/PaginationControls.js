'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function PaginationControls({ currentPage }) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    router.push(`${pathname}?page=${newPage}`);
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 border rounded-lg bg-gray-50">
        Page {currentPage}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 border rounded-lg hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
}