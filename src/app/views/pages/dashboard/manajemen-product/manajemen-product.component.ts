import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/core/api/product.service';
import { TableService } from '../components/table/table.service';

@Component({
  selector: 'app-manajemen-product',
  templateUrl: './manajemen-product.component.html',
  styleUrls: ['./manajemen-product.component.scss']
})
export class ManajemenProductComponent implements OnInit {
  pageTitle = 'Manajemen Product'
  data: Product[] = []
  displayColumns: string[] = ['name', 'price', 'stock', 'actionsDesc']

  constructor(
    private service: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res => {
      this.data = res
      console.log(this.data);
      this.tableService.triggerTableChange()

    })
  }

  handleAdd() {
    this.router.navigate(['./action'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        m: 'add'
      },
    });
  }

  delete(id: any) {
    this.service.delete(id).subscribe(res => {
      this.getData()
    })
  }
}
