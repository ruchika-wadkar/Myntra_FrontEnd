export interface Order {
  orderID: number;
  orderDate: string;
  orderDetails: any;
  customer: any;
  shipper: any;
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
