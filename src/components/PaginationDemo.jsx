import { usePagination } from "../hooks/usePagination";

export default function PaginationDemo() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(items.length, 10, 1);

  const currentItems = items.slice(startIndex, endIndex + 1);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <h3>
        Page {currentPage} of {totalPages}
      </h3>

      {currentItems.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>

      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>
      <div>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            style={{
              fontWeight: page === currentPage ? "bold" : "normal",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
