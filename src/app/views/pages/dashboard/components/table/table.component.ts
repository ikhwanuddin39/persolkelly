import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, ButtonComponent, MatDialogModule],
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input() data: any[] = []; // Data tabel
  pageSize = 10;
  dataSource = new MatTableDataSource<any>([]);// Data tabel yang ditampilkan
  @Input() columns: string[] = []; // Nama kolom tabel
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() deleteSelected = new EventEmitter<any>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  editItem(item: any) {
    console.log(item);
    this.router.navigate(['./action'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        m: 'edit',
        id: item?.id
      },
    });
  }

  deleteItem(item: any) {
    console.log(item);
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Hapus Data',
        message: 'Apakah anda yakin ingin menghapus data ini?'
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.deleteSelected.emit(item.id);
      }
    })
  }

  descItem(item: any) {
    this.router.navigate(['./detail'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        id: item?.id
      },
    });
  }


}
