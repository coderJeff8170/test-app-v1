import { GridApi } from "ag-grid-community";
import { useEffect, useState } from "react";



export const usePagination = (api: GridApi<unknown>) => {
    const getLastRecordOnPage = () => {
        //TODO: if last page of records, return total records
        return api.paginationGetPageSize() * (api.paginationGetCurrentPage()+1);
      }
    
      const getFirstRecordOnPage = () => {
        return getLastRecordOnPage() - api.paginationGetPageSize() + 1;
      }


    const [totalPages, setTotalPages] = useState(api.paginationGetTotalPages());
    const [pageSize, setPageSize] = useState(api.paginationGetPageSize());
    const [currentPage, setCurrentPage] = useState(api.paginationGetCurrentPage()+1);
    const [totalRecords ] = useState(api.getModel().getRowCount());
    const [lastRecordOnPage, setLastRecordOnPage] = useState(getLastRecordOnPage());
    const [firstRecordOnPage, setFirstRecordOnPage] = useState(getFirstRecordOnPage());


  useEffect(() => {
    const onPaginationChanged = () => {
        setFirstRecordOnPage(getFirstRecordOnPage());
        setLastRecordOnPage(getLastRecordOnPage());
        setCurrentPage(api.paginationGetCurrentPage()+1);
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
        totalPages };
};