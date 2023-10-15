import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/core/api/product.service';
import { HelpersService } from 'src/app/core/services/helpers.service';

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
    public helpers: HelpersService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res => {
      this.data = res
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
      this.helpers.alertSuccess('Berhasil menghapus data')
    })
  }
}
