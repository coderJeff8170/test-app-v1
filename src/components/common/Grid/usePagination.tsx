import { GridApi } from "ag-grid-community";
import { useEffect, useState } from "react";



export const usePagination = (api: GridApi<unknown>) => {
    // const [currentPage, setCurrentPage] = useState(api.paginationGetCurrentPage());
    const [pageSize, setPageSize] = useState(api.paginationGetPageSize());


  useEffect(() => {
    const onPaginationChanged = () => {
        // setCurrentPage(api.paginationGetCurrentPage());
        setPageSize(api.paginationGetPageSize());
      console.log(`PageSize: ${pageSize}`);
    };
    api.addEventListener("paginationChanged", onPaginationChanged);
  }, [api, pageSize]);

    return { pageSize, setPageSize };
};