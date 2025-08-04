import { Route } from '@angular/router';
import { BhuInfoComponent } from './bhuinfo.component';
import { BhuInfoListComponent } from '../bhuinfo-list/bhuinfo-list.component';
import { EditBhuInfoComponent } from '../edit-bhuinfo/edit-bhuinfo.component';
import { CreateBhuinfoComponent } from '../create-bhuinfo/create-bhuinfo.component';

export const routes: Route[] = [
  {
    path: '',
    component: BhuInfoComponent,
    children: [
      { path: '', component: BhuInfoListComponent },
      { path: 'bhu-info-list', component: BhuInfoListComponent },
      { path: 'create', component: CreateBhuinfoComponent },
      { path: 'edit', component: EditBhuInfoComponent },
    ],
  },
];
