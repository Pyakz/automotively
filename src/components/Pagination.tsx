import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
  pageRange?: number;
  currentPage: number;
  lastPage: number;
}

const Pagination = ({
  currentPage,
  lastPage,
  onPageChange,
  pageRange = 2,
}: PaginationProps) => {
  // Calculate the starting and ending pages to display based on current page
  let startPage = Math.max(1, currentPage - pageRange);
  let endPage = Math.min(lastPage, currentPage + pageRange);

  // If there are fewer pages to display than pageRange, adjust the start and end accordingly
  if (endPage - startPage < 2 * pageRange) {
    startPage = Math.max(1, endPage - 2 * pageRange);
    endPage = Math.min(lastPage, startPage + 2 * pageRange);
  }

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    const isActivePage = i === currentPage;
    pageButtons.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`${
          isActivePage ? "bg-slate-600" : "bg-slate-800"
        } cursor-pointer p-2 px-4 text-slate-50 font-bold hover:bg-slate-700  ease-in-out duration-150 mx-1 rounded-md`}
      >
        {i}
      </button>
    );
  }

  const prevButton = currentPage <= 1;
  const nextButton = currentPage >= lastPage;
  return (
    <div className="flex items-center justify-center my-10">
      {!prevButton && (
        <FiChevronLeft
          color="white"
          size="30"
          onClick={() => onPageChange(currentPage - 1)}
          className="p-1 cursor-pointer  hover:bg-slate-700 ease-in-out duration-150 rounded-md mx-1"
        />
      )}
      {pageButtons}
      {!nextButton && (
        <FiChevronRight
          color="white"
          size="30"
          onClick={() => onPageChange(currentPage + 1)}
          className="p-1 cursor-pointer hover:bg-slate-700  ease-in-out duration-150 rounded-md mx-1"
        />
      )}
    </div>
  );
};

export default Pagination;
