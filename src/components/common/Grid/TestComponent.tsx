import { Pagination } from "react-bootstrap";
import { CustomStatusPanelProps } from "ag-grid-react";
import { useEffect, useState } from "react";

const TestComponent = (props: CustomStatusPanelProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRange, setCurrentRange] = useState([1, 10]);

  const incrementRange = () => {
    if (currentRange[1] === props.api.paginationGetTotalPages()) {
      setCurrentRange([
        currentRange[0] + 10,
        props.api.paginationGetTotalPages(),
      ]);
      return;
    }
    //TODO if currentrange[1] is less than the total number of pages, do the following
    setCurrentRange([currentRange[0] + 10, currentRange[1] + 10]);
    //TODO else if currentrange[1] is greater than the total number of pages, then we need to set currentRange[1] to the total number of pages
  };

  const decrementRange = () => {
    if (currentRange[0] === 1) return;
    setCurrentRange([currentRange[0] - 10, currentRange[1] - 10]);
  };

  useEffect(() => {
    const onPaginationChanged = () => {
      const currentPage = props.api.paginationGetCurrentPage();
      console.log(`Current Page: ${currentPage}`);
      setCurrentPage(currentPage + 1);
    };

    props.api.addEventListener("paginationChanged", onPaginationChanged);
    // Cleanup: Remove the event listener when the component is unmounted
    // if (!props.api.isDestroyed()) {
    //     return () => {
    //   props.api.removeEventListener('paginationChanged', onPaginationChanged);
    // };}
  }, [props.api]);

  const renderItems = () => {
    const items = [];
    for (let number = currentRange[0]; number <= currentRange[1]; number++) {
      //if (number > props.api.paginationGetTotalPages()) break;
      items.push(
        <Pagination.Item
          key={number}
          onClick={() => props.api.paginationGoToPage(number - 1)}
          active={number === currentPage}
        >
          {number}
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
        <Pagination.First onClick={() => props.api.paginationGoToFirstPage()} />
        <Pagination.Prev
          onClick={() => props.api.paginationGoToPreviousPage()}
        />
        {currentRange[1] > 10 && (
          <Pagination.Ellipsis onClick={decrementRange} />
        )}
        {renderItems()}
        {props.api.paginationGetTotalPages() > 10 && (
          <Pagination.Ellipsis onClick={incrementRange} />
        )}
        {/* here, we'll need to only show when the number of pages is greater than 10 */}
        <Pagination.Next onClick={() => props.api.paginationGoToNextPage()} />
        <Pagination.Last onClick={() => props.api.paginationGoToLastPage()} />
      </Pagination>
    </div>
  );
};

export default TestComponent;
