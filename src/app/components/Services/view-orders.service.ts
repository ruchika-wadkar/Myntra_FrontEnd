import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewOrdersService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8702/api/v1/order';

  getOrder() {
    return this.http.get(this.API + '/' + localStorage.getItem('customerID'));
  }
}
