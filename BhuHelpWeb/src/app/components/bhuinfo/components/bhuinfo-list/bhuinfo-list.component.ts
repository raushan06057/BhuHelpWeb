import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';

// ModuleRegistry.registerModules();
@Component({
  selector: 'app-bhuinfo-list',
  templateUrl: './bhuinfo-list.component.html',
  styleUrls: ['./bhuinfo-list.component.scss'],
  standalone:true,
  imports: [AgGridModule, CommonModule],
})
export class BhuInfoListComponent implements OnInit {
  ngOnInit(): void {}
    rowData:Car[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
  columnDefs :ColDef<Car>[]= [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];


}
type Car = {
  make: string;
  model: string;
  price: number;
};
