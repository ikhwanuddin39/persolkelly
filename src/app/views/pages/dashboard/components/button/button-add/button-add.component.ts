import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-add.component.html'
})
export class ButtonAddComponent {
  @Input() buttonText: string = 'Default Text'; // Properti untuk teks tombol
  @Output() buttonClick = new EventEmitter<void>(); // EventEmitter untuk meng-handle klik tombol

  onButtonClick() {
    this.buttonClick.emit();
  }
}
