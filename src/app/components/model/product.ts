export interface Product {
  productID: number;
  productName: string;
  unit: number;
  price: number;
  supplierID: number;
  supplier: any; //json
}

export class ProductVo {
  productName: string;
  unit: number;
  price: number;
  supplierID: number;
}
