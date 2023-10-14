import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  toggleSidenav() {
    this.toggleSidebar.emit();
  }
}
