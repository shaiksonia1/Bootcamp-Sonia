import { GridOptions } from 'ag-grid-community';

export function renderGrid(gridOptions: GridOptions, rowData: any[]): void {
  gridOptions.api?.setRowData(rowData);
}
