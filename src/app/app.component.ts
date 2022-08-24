import { Component, OnInit, VERSION } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { InputCellRendererComponent } from './input-cell-renderer/input-cell-renderer.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  columnDefs: any;
  rowData: Object[] = [];
  gridOptions;
  constructor() {}
  ngOnInit(): void {
    this.initGrid();
    this.gridOptions = <GridOptions>{
      suppressPaginationPanel: true,
      rowHeight: 35,
      rowSelection: 'multiple',
      multiSortKey: 'ctrl',
      rowBuffer: 50,
      defaultColDef: {
        editable: false,
        sortable: true,
        filter: true,
        resizable: true,
        suppressKeyboardEvent: function (params) {
          return true;
        },
        suppressRowClickSelection: true,
        rowMultiSelectWithClick: true,
      },
    };
  }
  initGrid() {
    this.columnDefs = [
      {
        headerName: '',
        width: 35,
        checkboxSelection: true,
        suppressColumnsToolPanel: true,
        resizable: false,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        suppressMovable: true,
        suppressMenu: true,
        filter: false,
        pinned: 'left',
        sortable: false,
        cellStyle: { 'padding-top': '6px' },
      },
      {
        headerName: 'Quantity',
        width: 180,
        field: 'Quantity',
        cellRenderer: InputCellRendererComponent,
        valueGetter: '20',
        cellClass: 'decimalType',
      },
      { field: 'model' },
      { field: 'price' },
    ];
  }
  onGridReady($event) {
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];
  }
}
