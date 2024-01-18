// import React, { forwardRef, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { CustomStatusPanelProps } from 'ag-grid-react';
import { useEffect, useState } from "react";

// type TestComponentProps = {
//     gridRef: React.RefObject<unknown>;
// };



// const TestComponent = forwardRef(({ gridRef }: TestComponentProps) => {
    const TestComponent = (props: CustomStatusPanelProps) => {
  //let active = 1;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // console.log(props.api.paginationGetCurrentPage());
    // console.log(props.api);
    const onPaginationChanged = () => {
        const currentPage = props.api.paginationGetCurrentPage();
        console.log(`Current Page: ${currentPage}`);
        setCurrentPage(currentPage+1);
        // You can perform any action based on the current page here
      };
  
      // Subscribe to the paginationChanged event
    props.api.addEventListener('paginationChanged', onPaginationChanged);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      props.api.removeEventListener('paginationChanged', onPaginationChanged);
    };
  
  }, [props.api]); 

  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
    //   <Pagination.Item key={number} active={number === active}>
    <Pagination.Item key={number} onClick={() => props.api.paginationGoToPage(number-1)} active={number === currentPage}>
        {number}
      </Pagination.Item>
    );
  }

  

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
        <Pagination.First onClick={() => props.api.paginationGoToFirstPage()}/>
        <Pagination.Prev onClick={() => props.api.paginationGoToPreviousPage()}/>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        {items}
        {/* <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item> */}

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next onClick={() => props.api.paginationGoToNextPage()}/>{/* here, we'll call the api for the next page, duh gridRef?.current?.api?.paginationGoToNextPage */}

        {/* <Pagination.Next onClick={((gridRef.current as unknown) as { api: { paginationGoToNextPage: () => void } })?.api?.paginationGoToNextPage}/>here, we'll call the api for the next page, duh gridRef?.current?.api?.paginationGoToNextPage */}
        <Pagination.Last onClick={() => props.api.paginationGoToLastPage()}/>
      </Pagination>
    </div>
  );
// });
};

export default TestComponent;
