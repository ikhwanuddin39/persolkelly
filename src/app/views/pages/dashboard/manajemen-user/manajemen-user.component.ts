import { Component } from '@angular/core';
import { User, UserService } from 'src/app/core/api/user.service';

@Component({
  selector: 'app-manajemen-user',
  templateUrl: './manajemen-user.component.html',
  styleUrls: ['./manajemen-user.component.scss']
})
export class ManajemenUserComponent {
  pageTitle = 'Manajemen User'
  data: User[] = []
  displayColumns: string[] = ['no', 'name', 'email', 'address', 'actions']

  constructor(
    private service: UserService
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
