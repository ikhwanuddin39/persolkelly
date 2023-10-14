import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/core/api/product.service';

@Component({
  selector: 'app-manajemen-product',
  templateUrl: './manajemen-product.component.html',
  styleUrls: ['./manajemen-product.component.scss']
})
export class ManajemenProductComponent implements OnInit {
  pageTitle = 'Manajemen Product'
  data: Product[] = []

  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res => {
      this.data = res
    })
  }

  handleButtonClick() {
    console.log('Button Clicked');

  }
}
