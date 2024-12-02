import Link from 'next/link';
import { PaginationProps } from '../../types/coins';

export default function PaginationControls({ currentPage }: PaginationProps) {
  return (
    <div className="flex justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`/coins?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </Link>
      )}
      <Link
        href={`/coins?page=${currentPage + 1}`}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Next
      </Link>
    </div>
  );
}