import { Injectable } from '@angular/core';
import { Product, ProductVo } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {
    this.items = JSON.parse(localStorage.getItem('items'));
  }

  getItems() {
    console.log(this.items);
    return JSON.parse(localStorage.getItem('items'));
  }
  getPrice() {
    let temp = 0;
    this.items.forEach((element) => {
      temp += element.price;
    });
    return temp;
  }

  addToCart(product: Product) {
    this.items.push(product);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  emptyCart() {
    this.items = [];
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
