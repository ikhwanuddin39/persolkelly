import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  public endpoint = '';
  public url = environment.host

  // required service
  public readonly http: HttpClient = inject(HttpClient);

  //  get data
  public get(endpoint: string) {
    return this.http.get(`${this.url}/${endpoint}`)
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/${this.endpoint}`)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return [];
        })
      );
  }
}
