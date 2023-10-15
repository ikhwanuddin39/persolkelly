import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/core/services/helpers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/api/category.service';
import { ProductService } from 'src/app/core/api/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-action-product',
  templateUrl: './action-product.component.html',
  styleUrls: ['./action-product.component.scss']
})
export class ActionProductComponent implements OnInit, OnDestroy {

  pageTitle = 'Add Product'
  form!: FormGroup;
  categories: any[] = []
  mode: 'add' | 'edit' = 'add';

  constructor(
    public helpers: HelpersService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    public service: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      price: [0, Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: [null, Validators.required],
      category_id: [null, Validators.required],
    });
    this.mode = this.activatedRoute.snapshot.queryParams['m'];
    if (this.mode === 'edit') {
      this.pageTitle = 'Edit Product';
      this.service.getById(this.activatedRoute.snapshot.queryParams['id']).subscribe(res => {
        this.form.patchValue(res);
      });
    }
  }

  ngOnInit(): void {
    this.getCategory()
  }

  ngOnDestroy(): void {

  }

  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()

      this.helpers.alertWarning('Please fill all form');
    } else {
      if (this.mode === 'add') {
        this.service.insert(this.form.value).subscribe(res => {
          this.helpers.alertSuccess('Add product success');
          this.router.navigate(['../'], {
            relativeTo: this.activatedRoute,
          });
        });
      } else {
        this.service.updateById(this.activatedRoute.snapshot.queryParams['id'], this.form.value).subscribe(res => {
          this.helpers.alertSuccess('Edit product success');
          this.router.navigate(['../'], {
            relativeTo: this.activatedRoute,
          });
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }

}
