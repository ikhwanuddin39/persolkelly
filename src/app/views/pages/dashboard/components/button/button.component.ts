import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() buttonText: string = 'Default Text'; // Properti untuk teks tombol
  @Input() buttonType: string = 'default'; // Properti untuk tipe tombol
  @Output() buttonClick = new EventEmitter<void>(); // EventEmitter untuk meng-handle klik tombol

  onButtonClick() {
    this.buttonClick.emit();
  }
}
