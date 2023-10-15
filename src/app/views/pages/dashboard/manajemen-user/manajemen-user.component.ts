import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserService } from 'src/app/core/api/user.service';
import { HelpersService } from 'src/app/core/services/helpers.service';

@Component({
  selector: 'app-manajemen-user',
  templateUrl: './manajemen-user.component.html',
  styleUrls: ['./manajemen-user.component.scss']
})
export class ManajemenUserComponent {
  pageTitle = 'Manajemen User'
  data: User[] = []
  displayColumns: string[] = ['name', 'email', 'address', 'actions']

  constructor(
    private service: UserService,
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
