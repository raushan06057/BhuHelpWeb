import { Route } from '@angular/router';
import { BhuInfoComponent } from './bhuinfo.component';
import { CreateBhuInfoComponent } from '../create-bhuinfo/create-bhuinfo.component';
import { BhuInfoListComponent } from '../bhuinfo-list/bhuinfo-list.component';
import { EditBhuInfoComponent } from '../edit-bhuinfo/edit-bhuinfo.component';

export const routes: Route[] = [
  {
    path: '',
    component: BhuInfoComponent,
    children: [
      { path: '', component: CreateBhuInfoComponent },
      {path:'bhu-info-list',component:BhuInfoListComponent},
      { path: 'create-bhu-info', component: CreateBhuInfoComponent },
      { path: 'edit-bhu-info', component: EditBhuInfoComponent },
    ],
  },
];
