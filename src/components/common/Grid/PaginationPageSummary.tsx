
import { CustomStatusPanelProps } from "ag-grid-react";
import { useEffect, useState } from "react";


const PaginationPageSummary = (props: CustomStatusPanelProps) => {
  const [currentPage, setCurrentPage] = useState(props.api.paginationGetCurrentPage()+1);
  

  //need to hoist this to grid level possibly and pipe the values to the status bar components
  useEffect(() => {
    const onPaginationChanged = () => {
      setCurrentPage(props.api.paginationGetCurrentPage()+1);
    };
    props.api.addEventListener("paginationChanged", onPaginationChanged);
  }, [props.api]);

  return (
    <div className={"pagination-text"}>
      Page {currentPage} of {props.api.paginationGetTotalPages()}
    </div>
    
  );
};

export default PaginationPageSummary;
