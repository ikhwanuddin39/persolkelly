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

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return [];
        })
      );
  }

  insert(data: T): Observable<T> {
    return this.http.post<T>(`${this.url}/${this.endpoint}`, data)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return [];
        })
      );
  }

  updateById(id: string, data: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${this.endpoint}/${id}`, data)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return [];
        })
      );
  }
  // delete by id
  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return [];
        })
      );
  }
}
