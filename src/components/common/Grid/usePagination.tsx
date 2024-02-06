import { GridApi } from "ag-grid-community";
import { useEffect, useState } from "react";

export const usePagination = (api: GridApi<unknown>) => {
  //TODO: change these to regular functions so that they can be hoisted
  const getLastRecordOnPage = () => {
    //TODO: if last page of records, return total records
    return api.paginationGetPageSize() * (api.paginationGetCurrentPage() + 1);
  };

  const getFirstRecordOnPage = () => {
    return getLastRecordOnPage() - api.paginationGetPageSize() + 1;
  };

  const [totalPages, setTotalPages] = useState(api.paginationGetTotalPages());
  const [pageSize, setPageSize] = useState(api.paginationGetPageSize());
  const [currentPage, setCurrentPage] = useState(
    api.paginationGetCurrentPage() + 1
  );
  const [totalRecords] = useState(api.getModel().getRowCount());
  const [lastRecordOnPage, setLastRecordOnPage] = useState(
    getLastRecordOnPage()
  );
  const [firstRecordOnPage, setFirstRecordOnPage] = useState(
    getFirstRecordOnPage()
  );

  const INITIAL_RANGE = [0, totalPages > 9 ? 9 : totalPages];
  const [currentRange, setCurrentRange] = useState(INITIAL_RANGE);

  const incrementRange = () => {
    api.paginationGoToPage(currentRange[1] + 1);
    if (currentRange[1] === totalPages) {
      setCurrentRange([currentRange[0] + 10, totalPages]);
      return;
    }
    setCurrentRange([currentRange[0] + 10, currentRange[1] + 10]);
  };

  const decrementRange = () => {
    if (currentRange[0] === 1) return;
    api.paginationGoToPage(currentRange[0] - 1);
    setCurrentRange([currentRange[0] - 10, currentRange[1] - 10]);
  };

  const incrementPage = () => {
    if (currentPage === currentRange[1]) {
      incrementRange();
      return;
    }
    api.paginationGoToNextPage();
  };

  const goToLastPage = () => {
    setCurrentRange([totalPages - (totalPages % 10), totalPages]);
    api.paginationGoToLastPage();
  };

  const goToFirstPage = () => {
    setCurrentRange(INITIAL_RANGE);
    api.paginationGoToFirstPage();
  };

  const decrementPage = () => {
    api.paginationGoToPreviousPage();
    if (currentPage === currentRange[0] && currentRange[0] !== 0) {
      decrementRange();
    }
  };

  useEffect(() => {
    const onPaginationChanged = () => {
      setFirstRecordOnPage(getFirstRecordOnPage());
      setLastRecordOnPage(getLastRecordOnPage());
      setCurrentPage(api.paginationGetCurrentPage() + 1);
      setTotalPages(api.paginationGetTotalPages());

      console.log(`PageSize: ${pageSize}`);
    };
    api.addEventListener("paginationChanged", onPaginationChanged);
  }, [api, pageSize, totalPages, currentPage]);

  return {
    firstRecordOnPage,
    lastRecordOnPage,
    totalRecords,
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage,
    totalPages,
    incrementPage,
    decrementPage,
    goToFirstPage,
    goToLastPage,
    currentRange,
    incrementRange,
    decrementRange,
  };
};
