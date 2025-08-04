import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from '../../../components/auth/stores/actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
})
export class SideBarComponent {
  @Input() collapsed = false;
  private readonly store = inject(Store);
  logout(){
    this.store.dispatch(authActions.logout());
  }
}
