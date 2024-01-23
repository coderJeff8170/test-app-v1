import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import TestComponent from './TestComponent';


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
          statusPanel: TestComponent,
          key: 'testComponentKey',
          align: 'left',
        },
        { statusPanel: 'agTotalRowCountComponent' }, // Default status component
    { statusPanel: 'agFilteredRowCountComponent' }, // Default status component
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