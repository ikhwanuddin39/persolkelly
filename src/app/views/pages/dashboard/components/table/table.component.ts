import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input() data: any[] = []; // Data tabel
  @Input() columns: string[] = []; // Nama kolom tabel

  editItem(item: any) {
    console.log(item);
  }

  deleteItem(item: any) {
    console.log(item);
  }

  descItem(item: any) {
    console.log(item);
  }
}
