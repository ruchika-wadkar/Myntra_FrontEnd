import { Component } from '@angular/core';
import { OrdersService } from '../../Services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  Orders: any;

  constructor(private orderService: OrdersService) {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.orderService.getOrder().subscribe((resp) => {
      //console.log(resp);
      this.Orders = resp;
      console.log(this.Orders);
    });
  }
}
