import { Component } from '@angular/core';
import { Order, viewOrder } from '../../model/order';
import { ViewOrdersService } from '../../Services/view-orders.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css'],
})
export class ViewOrderComponent {
  vieworderService: ViewOrdersService;
  orders: any;
  constructor(vieworderService: ViewOrdersService) {
    this.vieworderService = vieworderService;
    this.getOrder();
  }
  getOrder() {
    this.vieworderService.getOrder().subscribe((res) => {
      this.orders = res;
      console.log(res);
    });
  }
}
