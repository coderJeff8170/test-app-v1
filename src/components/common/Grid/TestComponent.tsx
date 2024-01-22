import { Pagination } from "react-bootstrap";
import { CustomStatusPanelProps } from "ag-grid-react";
import { useEffect, useState } from "react";

const TestComponent = (props: CustomStatusPanelProps) => {

  const [totalPages] = useState(props?.api?.paginationGetTotalPages());
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState([0, 9]);

  const incrementRange = () => {
    props.api.paginationGoToPage(currentRange[1]+1)
    if (currentRange[1] === totalPages) {
      setCurrentRange([
        currentRange[0] + 10,
        totalPages,
      ]);
      return;
    }
    setCurrentRange([currentRange[0] + 10, currentRange[1] + 10]);
  };

  const decrementRange = () => {
    if (currentRange[0] === 1) return;
    props.api.paginationGoToPage(currentRange[0]-1);
    setCurrentRange([currentRange[0] - 10, currentRange[1] - 10]);
  };

  const incrementPage = () => {
    if (currentPage === currentRange[1]) {
      incrementRange();
      return;
    }
    props.api.paginationGoToNextPage();
  }

  const decrementPage = () => {
    props.api.paginationGoToPreviousPage();
    if (currentPage === currentRange[0]) {
      decrementRange();
    }
    
  }

  useEffect(() => {
    const onPaginationChanged = () => {
      const currentPage = props.api.paginationGetCurrentPage();
      setCurrentPage(currentPage);
    };
    props.api.addEventListener("paginationChanged", onPaginationChanged);
  }, [props.api]);

  const renderItems = () => {
    
    const items = [];
    for (let number = currentRange[0]; number <= currentRange[1]; number++) {
      if (number >= totalPages) break;
      items.push(
        <Pagination.Item
          key={number}
          onClick={() => props.api.paginationGoToPage(number)}
          active={number === props.api.paginationGetCurrentPage()}
        >
          {number+1}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div
      style={{
        display: "flex",
        margin: 0,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Pagination style={{ margin: "0" }}>
        {/* TODO: onGoToLastPage needs to set the original range */}
        <Pagination.First onClick={() => props.api.paginationGoToFirstPage()} />
        <Pagination.Prev
          onClick={() => decrementPage()}
        />
        {currentRange[1] > 10 && (
          <Pagination.Ellipsis onClick={decrementRange} />
        )}
        {renderItems()}
        {!(totalPages >= currentRange[0] && totalPages <= currentRange[1]) && (
          <Pagination.Ellipsis onClick={incrementRange} />
        )}
        <Pagination.Next onClick={() => incrementPage()} />
        {/* TODO: onGoToLastPage needs to set the correct range */}
        <Pagination.Last onClick={() => props.api.paginationGoToLastPage()} />
      </Pagination>
    </div>
  );
};

export default TestComponent;
