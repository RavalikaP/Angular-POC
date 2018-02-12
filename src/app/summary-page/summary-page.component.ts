import { Component, OnInit } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'exp-cal-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent {

  columnDefs;
  rowData;

  private gridOptions: GridOptions;

  constructor() {
      this.gridOptions = <GridOptions>{};
      this.gridOptions.columnDefs = [
          {
              headerName: "ID",
              field: "id",
              width: 100
          },
          {
              headerName: "Value",
              field: "value",
              width: 100
          },

      ];
      this.gridOptions.rowData = [
          {id: 5, value: 10},
          {id: 10, value: 15},
          {id: 15, value: 20}
      ]
  }

}
