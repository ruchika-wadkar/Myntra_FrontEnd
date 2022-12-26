import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8702';

  public getShippers() {
    return this.http.get(this.API + '/api/v1/shipper');
  }
}
