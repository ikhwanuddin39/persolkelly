import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
export interface User {
  id: string;
  name: string;
  address: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService<User>{
  override endpoint = 'users';
}
