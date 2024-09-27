import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dataGrid from "../../assets/Datagrid.json";
import GridOverlay from "./GridOverlay";
import ActionsRenderer from "./ActionsRenderer";

// Create new GridExample1 component
const GridExample1 = () => {
  console.log("x=", dataGrid.Entity);
  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([]);

  useEffect(() => {
    const fetchColumnDefs = dataGrid.Entity.columns.map((x) => {
      return {
        field: x.field,
        headerName: x.title,
        filter: "agNumberColumnFilter",
        minWidth: x.width,
        cellClass: x.cellClass,
        sortable: x.sortable,
        cellStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: x.align,
          visibility: x.IsVisible == true ? "visible" : "hidden",
        },
      };
    });

    const additionalColumnDefs = [
      {
        field: "actions",
        headerName: "عملیات",
        minWidth: 100,
        cellClass: "custom-class",
        cellRenderer: ActionsRenderer,
        cellRendererParams: { button: button },
        filter: false,
        sortable: false,
        resizable: false,
      },
    ];

    //concat both columnDefs
    setColumnDefs(fetchColumnDefs.concat(additionalColumnDefs));
  }, [dataGrid]);

  const defaultColDef = useMemo(() => {
    return {
      filter: dataGrid.Entity.EnableSearch ? "agTextColumnFilter" : "",
      floatingFilter: dataGrid.Entity.EnableFilterBar ? true : false,
      resizable: true,
      flex: 1,
      filter: true,
      editable: false,
      menuTabs: ["filterMenuTab"],
      cellClass: "grid-cell-center",
      width: 200,
    };
  }, []);

  const [rowData, setRowData] = useState([
    {
      InventoryModifyNumber: "InventoryModifyNumber",
      ProductCode: "ProductCode",
      ProductName: "ProductName",
      LocationCode: "0", //in dataGrid it has a space at the end of the name
      QuiddityTypeID: "QuiddityTypeID",
      InventoryModifyTypeID: "InventoryModifyTypeID",
      InventoryModifyReasonID: "InventoryModifyReasonID",
      ProductRealQtyInStart: "ProductRealQtyInStart",
      ProductAvailableQtyInStart: "ProductAvailableQtyInStart",
      LocationAvailableQtyInStart: "LocationAvailableQtyInStart",
      LocationRealQtyInStart: "LocationRealQtyInStart",
      Quantity: "Quantity",
      LocationAvailableQtyInEnd: "LocationAvailableQtyInEnd",
      LocationRealQtyInEnd: "LocationRealQtyInEnd",
      ProductAvailableQtyInEnd: "ProductAvailableQtyInEnd",
      ProductRealQtyInEnd: "ProductRealQtyInEnd",
      CreatedOn: "CreatedOn",
    },
    {
      InventoryModifyNumber: "InventoryModifyNumber1",
      ProductCode: "ProductCode1",
      ProductName: "ProductName1",
      LocationCode: "01",
      QuiddityTypeID: "QuiddityTypeID1",
      InventoryModifyTypeID: "InventoryModifyTypeID1",
      InventoryModifyReasonID: "InventoryModifyReasonID1",
      ProductRealQtyInStart: "ProductRealQtyInStart1",
      ProductAvailableQtyInStart: "ProductAvailableQtyInStart1",
      LocationAvailableQtyInStart: "LocationAvailableQtyInStart1",
      LocationRealQtyInStart: "LocationRealQtyInStart1",
      Quantity: "Quantity1",
      LocationAvailableQtyInEnd: "LocationAvailableQtyInEnd1",
      LocationRealQtyInEnd: "LocationRealQtyInEnd1",
      ProductAvailableQtyInEnd: "ProductAvailableQtyInEnd1",
      ProductRealQtyInEnd: "ProductRealQtyInEnd1",
      CreatedOn: "CreatedOn1",
    },
    {
      InventoryModifyNumber: "InventoryModifyNumber2",
      ProductCode: "ProductCode2",
      ProductName: "ProductName2",
      LocationCode: "02",
      QuiddityTypeID: "QuiddityTypeID2",
      InventoryModifyTypeID: "InventoryModifyTypeID2",
      InventoryModifyReasonID: "InventoryModifyReasonID2",
      ProductRealQtyInStart: "ProductRealQtyInStart2",
      ProductAvailableQtyInStart: "ProductAvailableQtyInStart2",
      LocationAvailableQtyInStart: "LocationAvailableQtyInStart2",
      LocationRealQtyInStart: "LocationRealQtyInStart2",
      Quantity: "Quantity2",
      LocationAvailableQtyInEnd: "LocationAvailableQtyInEnd2",
      LocationRealQtyInEnd: "LocationRealQtyInEnd2",
      ProductAvailableQtyInEnd: "ProductAvailableQtyInEnd2",
      ProductRealQtyInEnd: "ProductRealQtyInEnd2",
      CreatedOn: "CreatedOn2",
    },
    {
      InventoryModifyNumber: "InventoryModifyNumber3",
      ProductCode: "ProductCode3",
      ProductName: "ProductName3",
      LocationCode: "03",
      QuiddityTypeID: "QuiddityTypeID3",
      InventoryModifyTypeID: "InventoryModifyTypeID3",
      InventoryModifyReasonID: "InventoryModifyReasonID3",
      ProductRealQtyInStart: "ProductRealQtyInStart3",
      ProductAvailableQtyInStart: "ProductAvailableQtyInStart3",
      LocationAvailableQtyInStart: "LocationAvailableQtyInStart3",
      LocationRealQtyInStart: "LocationRealQtyInStart3",
      Quantity: "Quantity3",
      LocationAvailableQtyInEnd: "LocationAvailableQtyInEnd3",
      LocationRealQtyInEnd: "LocationRealQtyInEnd3",
      ProductAvailableQtyInEnd: "ProductAvailableQtyInEnd3",
      ProductRealQtyInEnd: "ProductRealQtyInEnd3",
      CreatedOn: "CreatedOn3",
    },
  ]);

  const selection = {
    mode: dataGrid.Entity.singleSelect ? "singleRow" : "multiRow",
    headerCheckbox: false,
  };

  const button = {
    key: 1,
    onClick: (data) => console.log(data),
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={`ag-theme-quartz-dark overflow-auto w-[${dataGrid.Entity.WindowWidth}px] h-[${dataGrid.Entity.WindowHeight}px]`}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        selection={selection}
        pagination={dataGrid.Entity.pagination}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50]}
        animateRows={true}
        enableClickSelection={true}
        // onSelectionChanged={function}
        // suppressRowClickSelection={false}
        onRowClicked={(e) => console.log("row clicked", e.rowIndex)}
        ref={gridRef}
      />
    </div>
  );
};

export default GridExample1;
