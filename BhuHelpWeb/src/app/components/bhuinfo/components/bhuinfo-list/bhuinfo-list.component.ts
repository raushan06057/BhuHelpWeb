import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBhuInfoListInterface } from '../../types/search-bhuinfo-list.interface';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectData, selectError, selectIsLoading } from './stores/reducers';
import { CommonModule } from '@angular/common';
import { bhuInfoSearchActions } from './stores/actions';

@Component({
  selector: 'app-bhuinfo-list',
  templateUrl: './bhuinfo-list.component.html',
  styleUrls: ['./bhuinfo-list.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class BhuInfoListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'dob',
    'age',
    'land',
    'mobileNumber',
    'village',
    'actions',
  ];

  data: any[] = [];
  totalCount = 0;
  pageSize = 2;
  pageIndex = 0;
  searchText = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private readonly store = inject(Store);

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    bhuInfoList: this.store.select(selectData),
    error: this.store.select(selectError),
  });

  searchBhuInfoListInterface!: SearchBhuInfoListInterface;
  ngOnInit() {
    this.loadDataFromStore();
  }
  loadDataFromStore() {
    this.searchBhuInfoListInterface = {
      page: this.pageIndex,
      pageSize: this.pageSize,
      search: this.searchText,
    };
    this.store.dispatch(
      bhuInfoSearchActions.bhuInfoSearch({
        searchBhuListRequest: this.searchBhuInfoListInterface,
      })
    );
  }

  onSearch(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.pageIndex = 0;
    this.paginator.firstPage();
    this.loadDataFromStore();
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadDataFromStore();
  }
  onRefresh() {
    this.pageIndex = 0;
    this.loadDataFromStore(); // reuse your data fetching logic
  }

  onView(row: any): void {
    // You can navigate to a detail page or open a dialog
    console.log('Viewing:', row);
    // Example: this.router.navigate(['/bhuinfo/view', row.id]);
  }

  onEdit(row: any): void {
    console.log('Editing:', row);
  }
  onCreate() {
    console.log('Create button clicked');
    this.store.dispatch(
      bhuInfoSearchActions.bhuInfoSearchGoToCreateBhuInfoPage()
    );
  }
}
