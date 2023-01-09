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
    // console.log(this.items);
    return JSON.parse(localStorage.getItem('items'));
  }
  getPrice() {
    let temp = 0;
    if (this.items) {
      this.items.forEach((element) => {
        temp += element.price;
      });
    }
    return temp;
  }

  addToCart(product: Product) {
    console.log(localStorage.getItem('items'));
    this.items.push(product);
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  removefromCart(cartItem: Product) {
    this.items = this.items.filter(
      (itm) => itm.productID !== cartItem.productID
    );
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  emptyCart() {
    this.items = [];
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
