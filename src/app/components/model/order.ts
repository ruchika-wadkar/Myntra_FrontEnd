import { customer } from './customer';
import { shipper } from './shipper';

export interface Order {
  orderID: number;
  orderDate: string;
  orderDetails: any;
  customer: any;
  shipper: any;
}

export class viewOrder {
  orderID: number;
  orderDate: string;
  customerID: number;
  customer: customer;
  shipperID: number;
  shipper: shipper;
  orderDetails: OrderDetails[];
}

export interface OrderVo {
  orderDate: string;
  orderDetails: OrderDetails[];
  customerID: number;
  shipperID: number;
}

export interface OrderDetails {
  productID: number;
  quantity: number;
}
