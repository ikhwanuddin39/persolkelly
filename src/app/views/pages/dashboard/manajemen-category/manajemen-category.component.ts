import { Component } from '@angular/core';
import { Category, CategoryService } from 'src/app/core/api/category.service';

@Component({
  selector: 'app-manajemen-category',
  templateUrl: './manajemen-category.component.html',
  styleUrls: ['./manajemen-category.component.scss']
})
export class ManajemenCategoryComponent {
  pageTitle = 'Manajemen Category'
  data: Category[] = []
  displayColumns: string[] = ['no', 'name', 'description', 'actionsDesc']

  constructor(
    private service: CategoryService
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

  handleButtonClick() {
    console.log('Button Clicked');
  }
}
