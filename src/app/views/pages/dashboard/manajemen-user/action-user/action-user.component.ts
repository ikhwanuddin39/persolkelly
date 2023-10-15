import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/api/user.service';
import { HelpersService } from 'src/app/core/services/helpers.service';

@Component({
  selector: 'app-action-user',
  templateUrl: './action-user.component.html',
  styleUrls: ['./action-user.component.scss']
})
export class ActionUserComponent implements OnInit {
  pageTitle = 'Add User'
  form!: FormGroup;
  mode: 'add' | 'edit' = 'add';

  constructor(
    public helpers: HelpersService,
    private formBuilder: FormBuilder,
    public service: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: [null, Validators.required],
    });
    this.mode = this.activatedRoute.snapshot.queryParams['m'];
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    if (this.mode === 'edit') {
      this.pageTitle = 'Edit User';
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
          this.helpers.alertSuccess('Add user success');
          this.router.navigate(['../'], {
            relativeTo: this.activatedRoute,
          });
        });
      } else {
        this.service.updateById(this.activatedRoute.snapshot.queryParams['id'], this.form.value).subscribe(res => {
          this.helpers.alertSuccess('Edit user success');
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
