import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // ngAfterViewInit() {
  //   console.log(this.sidenav);

  //   // Pastikan bahwa sidenav sudah tersedia sebelum mencoba mengaksesnya
  //   this.toggleSidenav();
  // }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
