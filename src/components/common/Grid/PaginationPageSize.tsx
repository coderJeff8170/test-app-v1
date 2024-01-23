import { DropdownButton, Dropdown } from "react-bootstrap";
import { CustomStatusPanelProps } from "ag-grid-react";


const PaginationPageSize = (props: CustomStatusPanelProps) => {
  console.log(props);

  const renderItems = () => {
    const pageSizes = [5, 10, 25, 50, 100]; //TODO: bring this in via props?
    const items = []; 
    for (let i = 0; i <= pageSizes.length; i++) {
      items.push(
        <Dropdown.Item
          key={i}
          onClick={() => console.log(pageSizes[i])}
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
      <DropdownButton id="dropdown-basic-button" title="100">
      {renderItems()}
    </DropdownButton>
    </div>
    
  );
};

export default PaginationPageSize;
