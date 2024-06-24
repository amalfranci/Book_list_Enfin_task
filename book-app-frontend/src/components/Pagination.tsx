import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  const prevPage = () => setPage(page > 1 ? page - 1 : 1);
  const nextPage = () => setPage(page < totalPages ? page + 1 : totalPages);

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={prevPage}
        className="mx-1 px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100"
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="mx-2 px-3 py-1">{`Page ${page} of ${totalPages}`}</span>
      <button
        onClick={nextPage}
        className="mx-1 px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
