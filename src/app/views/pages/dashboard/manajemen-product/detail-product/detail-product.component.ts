import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/api/category.service';
import { Product, ProductService } from 'src/app/core/api/product.service';
import { switchMap, map } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit, OnDestroy {
  pageTitle = 'Detail Product';
  id: any;
  data: Product | undefined;
  private destroy$ = new Subject<void>();

  constructor(
    private service: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getData() {
    this.service.getById(this.id).pipe(
      switchMap(product => {
        return this.getCategory(product.category_id).pipe(
          map((category: any) => {
            product.category = category; // Menambahkan data kategori ke produk
            return product;
          })
        );
      }),
      takeUntil(this.destroy$) // Unsubscribe saat komponen dihancurkan
    ).subscribe(res => {
      this.data = res;
    });
  }

  getCategory(id: any) {
    return this.categoryService.getById(id);
  }

  onBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }
}
