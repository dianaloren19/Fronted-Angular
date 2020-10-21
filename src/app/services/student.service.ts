import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/students/';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http:HttpClient) { 
  
}

    create(data): Observable<any> {
      return this.http.post(baseUrl, data);
    }

    getAll(): Observable<any> {
          return this.http.get(baseUrl);
        }

    findByTitle(name): Observable<any> {
      return this.http.get(`${baseUrl}?name=${name}`);
    }    

    get(id): Observable<any> {
      return this.http.get(`${baseUrl}/${id}`);
    }

    update(id, data): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }

    

}
