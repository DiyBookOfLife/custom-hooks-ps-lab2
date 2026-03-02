import { useState } from "react";

export function usePagination(
  totalItems,
  itemsPerPage = 10,
  initialPage = 1
) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // keep page in valid range
  const safePage = Math.min(Math.max(currentPage, 1), totalPages || 1);

  // indexes
  const startIndex = (safePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  // items count on page
  const itemsOnCurrentPage = Math.min(
    itemsPerPage,
    totalItems - startIndex
  );

  // navigation
  const nextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  const prevPage = () =>
    setCurrentPage((p) => Math.max(p - 1, 1));

  const setPage = (pageNumber) =>
    setCurrentPage(
      Math.min(Math.max(pageNumber, 1), totalPages)
    );

  const canNextPage = safePage < totalPages;
  const canPrevPage = safePage > 1;

  return {
    currentPage: safePage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}