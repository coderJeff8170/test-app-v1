import { Pagination } from "react-bootstrap";
import { CustomStatusPanelProps } from "ag-grid-react";
import { useEffect, useState } from "react";

const PaginationBar = (props: CustomStatusPanelProps) => {

  //some of these might be needed in other status bar components. It might be worth it to move them to a common file (usePagination.tsx)
  const [totalPages, setTotalPages] = useState(props?.api?.paginationGetTotalPages());
  const INITIAL_RANGE = [0, totalPages > 9 ? 9 : totalPages];
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(INITIAL_RANGE);

  const incrementRange = () => {
    props.api.paginationGoToPage(currentRange[1] + 1);
    if (currentRange[1] === totalPages) {
      setCurrentRange([currentRange[0] + 10, totalPages]);
      return;
    }
    setCurrentRange([currentRange[0] + 10, currentRange[1] + 10]);
  };

  const decrementRange = () => {
    if (currentRange[0] === 1) return;
    props.api.paginationGoToPage(currentRange[0] - 1);
    setCurrentRange([currentRange[0] - 10, currentRange[1] - 10]);
  };

  const incrementPage = () => {
    if (currentPage === currentRange[1]) {
      incrementRange();
      return;
    }
    props.api.paginationGoToNextPage();
  };

  const goToLastPage = () => {
    setCurrentRange([totalPages - (totalPages % 10), totalPages]);
    props.api.paginationGoToLastPage();
  };

  const goToFirstPage = () => {
    setCurrentRange(INITIAL_RANGE); 
    props.api.paginationGoToFirstPage();
  };

  const decrementPage = () => {
    props.api.paginationGoToPreviousPage();
    if (currentPage === currentRange[0] && currentRange[0] !== 0) {
      decrementRange();
    }
  };

  useEffect(() => {
    const onPaginationChanged = () => {
      const currentPage = props.api.paginationGetCurrentPage();
      const totalPages = props.api.paginationGetTotalPages();
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
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
