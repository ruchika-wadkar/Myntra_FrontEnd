import { getLocaleExtraDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderVo } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8702/api/v1/order';

  getOrder() {
    return this.http.get(this.API);
  }

  addOrders(orderVo: any) {
    return this.http.post(this.API, orderVo, { responseType: 'text' });
  }
}
