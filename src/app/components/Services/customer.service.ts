import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8702/api/v1/customer';

  // just cheking
  // hystgagag
  public getcustomer(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  savecustomer(customer: object): Observable<Object> {
    return this.http.post(`${this.url}`, [customer]);
  }

  public updatecustomer(customer) {
    console.log([customer]);
    return this.http.put(`${this.url}`, [customer]);
  }

  public deletecustomer(pid) {
    return this.http.delete(`${this.url}` + '/' + pid);
  }
}
