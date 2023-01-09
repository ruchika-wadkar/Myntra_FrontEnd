import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Order, OrderDetails, OrderVo } from '../../model/order';
import { Product } from '../../model/product';
import { CartService } from '../../Services/cart.service';
import { OrdersService } from '../../Services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // items = this.cartService.getItems();
  items: Product[];
  count: number = 0;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService
  ) {
    this.items = cartService.getItems();

    this.count = cartService.getPrice();
  }
  emptyCart() {
    this.items = [];
    this.count = 0;
    this.cartService.emptyCart();
  }

  deletefromcart(cartItem) {
    // console.log(cartItem);
    this.count = this.count - cartItem.price;
    this.cartService.removefromCart(cartItem);

    // localStorage.setItem('items', JSON.stringify(this.items));
    this.items = this.cartService.getItems();
    // this.cartService.getItems();
    // console.log(localStorage.getItem('items') + 'line 36');
    // this.cartService.getItems();
    // console.log(localStorage.getItem('items') + ' hello');
  }

  @ViewChild('nameInput') nameInput!: ElementRef;

  buyNow() {
    localStorage.setItem('customerID', this.nameInput.nativeElement.value);
    let date = new Date();
    let orderDetails: OrderDetails[] = [];
    this.items.forEach((element) => {
      orderDetails.push({
        productID: element.productID,
        quantity: 1,
      });
    });
    let order: OrderVo = {
      customerID: this.nameInput.nativeElement.value,
      orderDate: date.toISOString().split('T')[0],
      // date: '2023-01-01',
      shipperID: 301,
      orderDetails: orderDetails,
    };

    console.log(order);
    this.ordersService.addOrders(order).subscribe((o) => {
      //alert('Order Successful')
      this.emptyCart();
      Swal.fire({
        title: 'Order Placed Successfully !',
        text: '',
        timer: 1200,
      });
    });
  }
}
