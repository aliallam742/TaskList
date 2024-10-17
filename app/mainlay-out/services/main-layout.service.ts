import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {
  private baseurl: string = 'http://localhost:3000/tasks'
  private http = inject(HttpClient)
  constructor() { }

  getTasks(): Observable<any> {
    return this.http.get(`${this.baseurl}`);
  }
  CreateTask(taskData: any): Observable<any> {
    return this.http.post(`${this.baseurl}`, taskData);
  }
  getDataById(id: string): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);

  }
  updateTask(taskData: any): Observable<any> {
    return this.http.put(`${this.baseurl}/${taskData.id}`, taskData)
  }
  Delete(taskId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/${taskId}`)
  }
}
