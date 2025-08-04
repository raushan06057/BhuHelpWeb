import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-bhu-info',
  templateUrl: './bhuinfo.component.html',
  styleUrls: ['./bhuinfo.component.scss'],
  imports: [RouterOutlet, SideBarComponent],
})
export class BhuInfoComponent implements OnInit {
      sidebarCollapsed = false;


  ngOnInit(): void {}
}
