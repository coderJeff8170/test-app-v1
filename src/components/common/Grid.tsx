import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';


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

// Create new GridExample component
export const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef[]>([
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ]);

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  }, []);


  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "300px" }}
    >
      <AgGridReact 
        pagination={true}
        rowData={rowData} 
        columnDefs={colDefs} 
      />
    </div>
  );
};
