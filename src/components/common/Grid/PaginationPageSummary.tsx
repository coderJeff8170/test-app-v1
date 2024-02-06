import { CustomStatusPanelProps } from "ag-grid-react";
import { usePagination } from "./usePagination";

const PaginationPageSummary = (props: CustomStatusPanelProps) => {
  const { currentPage } = usePagination(props.api);

  return (
    <div className={"pagination-text"}>
      Page {currentPage} of {props.api.paginationGetTotalPages()}
    </div>
  );
};

export default PaginationPageSummary;
