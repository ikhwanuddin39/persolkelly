import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() data: any[] = []; // Data tabel
  pageSize = 10;
  dataSource: any[] = []; // Data tabel yang ditampilkan
  @Input() columns: string[] = []; // Nama kolom tabel
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // Tambahkan kolom no
    this.data.map((item, index) => {
      item.no = index + 1;
    })
    this.dataSource = this.data.slice(0, this.pageSize); // Data tabel yang ditampilkan
  }

  editItem(item: any) {
    console.log(item);
  }

  deleteItem(item: any) {
    console.log(item);
  }

  descItem(item: any) {
    console.log(item);
  }

  // Handler perubahan halaman
  onPageChange(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.updateDataSource();
  }

  // Mengatur ulang data yang ditampilkan sesuai halaman
  updateDataSource() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.dataSource = this.data.slice(startIndex, endIndex);
  }

}
