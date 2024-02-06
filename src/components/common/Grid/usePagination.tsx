import { GridApi } from "ag-grid-community";
import { useEffect, useState } from "react";



export const usePagination = (api: GridApi<unknown>) => {
    const [totalPages, setTotalPages] = useState(api.paginationGetTotalPages());
    // const [currentPage, setCurrentPage] = useState(api.paginationGetCurrentPage());
    const [pageSize, setPageSize] = useState(api.paginationGetPageSize());
    const [currentPage, setCurrentPage] = useState(api.paginationGetCurrentPage()+1);


  useEffect(() => {
    const onPaginationChanged = () => {
        setCurrentPage(api.paginationGetCurrentPage()+1);
        setTotalPages(api.paginationGetTotalPages());
        // setCurrentPage(api.paginationGetCurrentPage());
        // setPageSize(api.paginationGetPageSize());
      console.log(`PageSize: ${pageSize}`);
    };
    api.addEventListener("paginationChanged", onPaginationChanged);
  }, [api, pageSize, totalPages, currentPage]);

    return { pageSize, setPageSize, currentPage, setCurrentPage, totalPages };
};