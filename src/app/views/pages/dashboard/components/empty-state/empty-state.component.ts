import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-state.component.html'
})
export class EmptyStateComponent {
  @Input() title: string = 'No Data'; // Properti untuk judul
  @Input() description: string = 'Data is empty'; // Properti untuk deskripsi

}
