import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Product, ProductVo } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


  public saveProduct(product: ProductVo){
    console.log([product])
    return this.http.post("http://localhost:8702/api/v1/products", [product])

  }

  public deleteProduct(pid){
    return this.http.delete("http://localhost:8702/api/v1/products/" + pid)
  }


  public updateProduct(product: ProductVo){
    console.log([product])
    return this.http.put("http://localhost:8702/api/v1/products", [product])
  }
}
