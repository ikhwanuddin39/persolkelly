import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/api/category.service';
import { HelpersService } from 'src/app/core/services/helpers.service';

@Component({
  selector: 'app-action-category',
  templateUrl: './action-category.component.html',
  styleUrls: ['./action-category.component.scss']
})
export class ActionCategoryComponent implements OnInit {
  pageTitle = 'Add Category'
  form!: FormGroup;
  mode: 'add' | 'edit' = 'add';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public service: CategoryService,
    public helpers: HelpersService
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
    this.mode = this.activatedRoute.snapshot.queryParams['m'];
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    if (this.mode === 'edit') {
      this.pageTitle = 'Edit Category';
      this.service.getById(this.activatedRoute.snapshot.queryParams['id']).subscribe(res => {
        this.form.patchValue(res);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()

      this.helpers.alertWarning('Please fill all form');
    } else {
      if (this.mode === 'add') {
        this.service.insert(this.form.value).subscribe(res => {
          this.helpers.alertSuccess('Add Category success');
          this.router.navigate(['../'], {
            relativeTo: this.activatedRoute,
          });
        });
      } else {
        this.service.updateById(this.activatedRoute.snapshot.queryParams['id'], this.form.value).subscribe(res => {
          this.helpers.alertSuccess('Edit Category success');
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
