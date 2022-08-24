import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-input-cell-renderer',
  templateUrl: './input-cell-renderer.component.html',
  styleUrls: ['./input-cell-renderer.component.css'],
})
export class InputCellRendererComponent
  implements OnInit, ICellRendererAngularComp
{
  constructor() {}
  params;
  agInit(params: ICellRendererParams<any, any>): void {
     this.params = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}
}
