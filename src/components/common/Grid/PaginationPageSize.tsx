import { DropdownButton, Dropdown } from "react-bootstrap";
import { CustomStatusPanelProps } from "ag-grid-react";
// import { useState } from "react";
import { usePagination } from "./usePagination";


const PaginationPageSize = (props: CustomStatusPanelProps) => {

  // const [pageSize, setPageSize] = useState(props.api.paginationGetPageSize());
  const { pageSize, setPageSize } = usePagination(props.api);

  const onChange = (pageSize: number) => {
    setPageSize(pageSize);
    props.api.setGridOption('paginationPageSize', pageSize);
  }

  const renderItems = () => {
    const pageSizes = [5, 10, 25, 50, 100]; //TODO: bring this in via props?
    const items = []; 
    for (let i = 0; i <= pageSizes.length; i++) {
      items.push(
        <Dropdown.Item
          key={i}
            onClick={() => onChange(pageSizes[i])}
        >
          {pageSizes[i]}
        </Dropdown.Item>
      );
    }
    return items;
  };

  return (
    <div>
      {/* <span>PageSize</span> */}
      <DropdownButton id="dropdown-basic-button" title={pageSize}>
      {renderItems()}
    </DropdownButton>
    </div>
    
  );
};

export default PaginationPageSize;
