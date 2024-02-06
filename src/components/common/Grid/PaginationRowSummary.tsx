
import { CustomStatusPanelProps } from "ag-grid-react";
import { usePagination } from "./usePagination";


const PaginationRowSummary = (props: CustomStatusPanelProps) => {

  const { firstRecordOnPage, lastRecordOnPage, totalRecords  } = usePagination(props.api);

  return (
    <div className={"pagination-text"}>
      {firstRecordOnPage} to {lastRecordOnPage} of {totalRecords} Records
    </div>
    
  );
};

export default PaginationRowSummary;
