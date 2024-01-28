
import { CustomStatusPanelProps } from "ag-grid-react";


const PaginationPageSummary = (props: CustomStatusPanelProps) => {
  console.log(props);

  return (
    <div className={"pagination-text"}>
      {/* <div style={{padding: "10px 0"}}> */}
      Page 1 of 14
    </div>
    
  );
};

export default PaginationPageSummary;
