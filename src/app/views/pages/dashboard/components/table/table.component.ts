import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() data: any[] = []; // Data tabel
  pageSize = 10;
  // dataSource = this.data.slice(0, this.pageSize); // Data tabel yang ditampilkan
  @Input() columns: string[] = []; // Nama kolom tabel
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // Set jumlah item per halaman

  ngOnInit(): void {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    console.log(this.data);

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
    // this.dataSource = this.data.slice(startIndex, endIndex);
  }

}
