import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippersComponent } from './components/shippers/shippers.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';

const routes: Routes = [
  {
    path: 'CustomerDetails',
    component: CustomerDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
  },
  {
    path: 'shippers',
    component: ShippersComponent,
    pathMatch: 'full',
  },
  {
    path: 'orders',
    component: OrdersComponent,
    pathMatch: 'full',
  },
  {
    path : 'viewproducts',
    component:ViewProductsComponent,
    pathMatch:'full',
  },
  {
    path : 'viewcustomers',
    component:ViewCustomersComponent,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
