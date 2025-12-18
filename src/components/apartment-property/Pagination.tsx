"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center border rounded-md overflow-hidden text-sm">

        {/* Previous */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          className="px-4 py-2 border-r bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border-r ${
              currentPage === page
                ? "bg-orange-400 text-white font-semibold"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Dots */}
        <span className="px-4 py-2 border-r bg-white">...</span>

        {/* Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          className={`px-4 py-2 border-r ${
            currentPage === totalPages
              ? "bg-orange-400 text-white font-semibold"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>

        {/* Next */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          className="px-4 py-2 bg-white hover:bg-gray-100 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
