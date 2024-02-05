
import { CustomStatusPanelProps } from "ag-grid-react";
import { useEffect, useState } from "react";


const PaginationRowSummary = (props: CustomStatusPanelProps) => {

  const getLastRecordOnPage = () => {
    //TODO: if last page of records, return total records
    return props.api.paginationGetPageSize() * (props.api.paginationGetCurrentPage()+1);
  }

  const getFirstRecordOnPage = () => {
    return getLastRecordOnPage() - props.api.paginationGetPageSize() + 1;
  }
  const [pageSize, setPageSize] = useState(props.api.paginationGetPageSize());
  const [totalRecords, setTotalRecords] = useState(props.api.getModel().getRowCount());
  const [lastRecordOnPage, setLastRecordOnPage] = useState(getLastRecordOnPage());
  const [firstRecordOnPage, setFirstRecordOnPage] = useState(getFirstRecordOnPage());



  useEffect(() => {
    const onPaginationChanged = () => {
      setFirstRecordOnPage(getFirstRecordOnPage());
      setLastRecordOnPage(getLastRecordOnPage());
    };
    props.api.addEventListener("paginationChanged", onPaginationChanged);
  }, [props.api]);

  //create a useEffect to listen for pagination changes - or better yet, move this to a custom hook


  // const lastRecordOnPage = props.api.paginationGetPageSize() * props.api.paginationGetCurrentPage();
  // const firstRecordOnPage = lastRecordOnPage - props.api.paginationGetPageSize() + 1;

  return (
    <div className={"pagination-text"}>
      {firstRecordOnPage} to {lastRecordOnPage} of {totalRecords} Records
    </div>
    
  );
};

export default PaginationRowSummary;
