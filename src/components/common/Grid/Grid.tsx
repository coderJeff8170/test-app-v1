import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import PaginationBar from './PaginationBar';
import PaginationPageSize from './PaginationPageSize';
import PaginationRowSummary from './PaginationRowSummary';
import PaginationPageSummary from './PaginationPageSummary';


// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

export const GridExample = () => {

  const [rowData, setRowData] = useState<IRow[]>([]);
  const gridRef: MutableRefObject<unknown> = useRef<unknown>();

  const [colDefs] = useState<ColDef[]>([
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ]);

  const statusBar = () => {
    return {
      statusPanels: [
        
        {
          statusPanel: PaginationBar,
          key: 'paginationBarKey',
          align: 'left',
        },
        {
          statusPanel: PaginationPageSize,
          key: 'paginationPageSizeKey',
          align: 'right',
        },
        {
          statusPanel: PaginationRowSummary,
          key: 'paginationRowKey',
          align: 'right',
        },
        {
          statusPanel: PaginationPageSummary,
          key: 'paginationPageKey',
          align: 'right',
        },
        
        // { statusPanel: 'agTotalRowCountComponent' }, // Default status component
      ],
    };
  };

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  }, []);

  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "300px" }}
    >
      <AgGridReact 
        ref={gridRef as React.RefObject<AgGridReact<IRow>>}
        pagination={true}
        rowData={rowData} 
        columnDefs={colDefs}
        statusBar={statusBar()}
      />
    </div>
  );
};
