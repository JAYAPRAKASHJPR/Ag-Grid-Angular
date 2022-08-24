import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputCellRendererComponent } from './input-cell-renderer/input-cell-renderer.component';
import { HelloComponent } from './hello.component';

import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule],
  declarations: [AppComponent, HelloComponent, InputCellRendererComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
