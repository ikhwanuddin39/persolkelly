import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tableChangeSubject: Subject<void> = new Subject<void>();

  constructor() { }

  // Fungsi untuk memicu perubahan
  triggerTableChange() {
    this.tableChangeSubject.next();
  }

  // Fungsi untuk mendengarkan perubahan
  onTableChange(): Observable<void> {
    return this.tableChangeSubject.asObservable();
  }
}
