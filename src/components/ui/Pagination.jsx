import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

/**
 * Pagination component for navigating through pages
 * @param {Object} props - Component props
 * @param {number} props.currentPage - Current active page
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Function to handle page changes
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Generate array of page numbers to show (with ellipsis if needed)
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always show first page
    pageNumbers.push(1);

    if (totalPages <= 7) {
      for (let i = 2; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 3) {
        pageNumbers.push('...');
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  // Go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Ensure pagination always appears, even for 1 page
  if (totalPages < 1) {
    return null;
  }

  return (
    <nav className="flex justify-center items-center mt-8 mb-4">
      <ul className="flex space-x-1">
        {/* Previous page button */}
        <li>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-8 h-8 rounded ${
              currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        </li>

        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center w-8 h-8 rounded ${
                  currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next page button */}
        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-8 h-8 rounded ${
              currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Next page"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
