import { Pagination } from "react-bootstrap";
import { CustomStatusPanelProps } from "ag-grid-react";
import { usePagination } from "./usePagination";

/**
 * @param props the most important prop is the api, which is the ag-grid api.
 * @returns a PaginationBar component that can be used in the ag-grid status bar to navigate through 10 pages of data at a time
 */
const PaginationBar = (props: CustomStatusPanelProps) => {
  const {
    currentRange,
    totalPages,
    incrementRange,
    decrementRange,
    incrementPage,
    goToLastPage,
    goToFirstPage,
    decrementPage,
  } = usePagination(props.api);

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
          {number + 1}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div>
      <Pagination style={{ margin: "0" }}>
        <Pagination.First onClick={() => goToFirstPage()} />
        <Pagination.Prev onClick={() => decrementPage()} />
        {currentRange[1] > 10 && (
          <Pagination.Ellipsis onClick={decrementRange} />
        )}
        {renderItems()}
        {!(totalPages >= currentRange[0] && totalPages <= currentRange[1]) && (
          <Pagination.Ellipsis onClick={incrementRange} />
        )}
        <Pagination.Next onClick={() => incrementPage()} />
        <Pagination.Last onClick={() => goToLastPage()} />
      </Pagination>
    </div>
  );
};

export default PaginationBar;
