import { Injectable } from '@angular/core';
import { Product, ProductVo } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {
    // localStorage.setItem('items', JSON.stringify(this.items));
    this.items = JSON.parse(localStorage.getItem('items'));
  }

  addToCart(product: Product) {
    this.items.push(product);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItems() {
    console.log(this.items);
    return JSON.parse(localStorage.getItem('items'));
  }
}
