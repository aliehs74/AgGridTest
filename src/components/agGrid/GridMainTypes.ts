import { ColDef } from 'ag-grid-community';
export interface ButtonProps {
  key: string;
  onClick: (e: any) => void;
  // Add other properties as needed
}

export interface ColumnDef extends ColDef {
  field: string;
  headerName: string;
  filter: string | boolean;
  minWidth: number;
  cellClass: string;
  sortable: boolean;
  cellStyle: {
    display: string;
    justifyContent: string;
    alignItems: string;
    visibility: string;
  };
}
export interface additionalColumnDefs extends ColumnDef {
  field: string;
  headerName: string;
  minWidth: number;
  cellClass: string;
  cellRenderer?: ({ button }: { button: ButtonProps; }) => JSX.Element;
  cellRendererParams: { button: { key: number; onClick: (data: any) => void; }; };
  filter: boolean | string;
  sortable: boolean;
  resizable: boolean;
}