import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8702/api/v1/shipper';

  public getShippers(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public saveShipper(shipper: object): Observable<Object> {
    return this.http.post(`${this.url}`, [shipper]);
  }
}
