import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category, CategoryService } from 'src/app/core/api/category.service';
import { HelpersService } from 'src/app/core/services/helpers.service';

@Component({
  selector: 'app-manajemen-category',
  templateUrl: './manajemen-category.component.html',
  styleUrls: ['./manajemen-category.component.scss']
})
export class ManajemenCategoryComponent {
  pageTitle = 'Manajemen Category'
  data: Category[] = []
  displayColumns: string[] = ['name', 'description', 'actions']

  constructor(
    private service: CategoryService,
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
      console.log(this.data);

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
