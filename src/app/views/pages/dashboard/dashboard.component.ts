import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { menus } from './menus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  //list menu
  menu = menus

  //toggle sidenav
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
