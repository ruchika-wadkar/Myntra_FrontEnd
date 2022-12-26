import { Component } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // items = this.cartService.getItems();
  items: Product[];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
    this.items = cartService.getItems();
  }

  setTotal(price) {
    this.totalPrice = price;
  }
}
