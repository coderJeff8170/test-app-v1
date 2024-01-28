
import { CustomStatusPanelProps } from "ag-grid-react";


const PaginationRowSummary = (props: CustomStatusPanelProps) => {
  console.log(props);

  return (
    <div className={"pagination-text"}>
      1 to 100 of 1375 Records
    </div>
    
  );
};

export default PaginationRowSummary;
