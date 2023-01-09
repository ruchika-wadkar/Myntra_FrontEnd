import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/UserComponents/cart/cart.component';
import { CustomerDetailsComponent } from './components/AdminComponents/customer-details/customer-details.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/AdminComponents/orders/orders.component';
import { ProductsComponent } from './components/AdminComponents/products/products.component';
import { ShippersComponent } from './components/AdminComponents/shippers/shippers.component';
import { ViewProductsComponent } from './components/UserComponents/view-products/view-products.component';
import { ViewCustomersComponent } from './components/UserComponents/view-customers/view-customers.component';
import { AdminComponent } from './components/AdminComponents/admin/admin.component';
import { UserComponent } from './components/UserComponents/user/user.component';
import { ViewOrderComponent } from './components/UserComponents/view-order/view-order.component';

const routes: Routes = [
  //admin routes
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/CustomerDetails',
    component: AdminComponent,
    pathMatch: 'full',
    data: { component: CustomerDetailsComponent },
  },
  {
    path: 'admin/products',
    component: AdminComponent,
    pathMatch: 'full',
    data: { component: ProductsComponent },
  },
  {
    path: 'admin/shippers',
    component: AdminComponent,
    pathMatch: 'full',
    data: { component: ShippersComponent },
  },
  {
    path: 'admin/orders',
    component: AdminComponent,
    pathMatch: 'full',
    data: { component: OrdersComponent },
  },

  //User routes
  {
    path: '',
    component: UserComponent,
    pathMatch: 'full',
  },

  {
    path: 'cart',
    component: UserComponent,
    pathMatch: 'full',
    data: { component: CartComponent },
  },

  {
    path: 'viewproducts',
    component: UserComponent,
    pathMatch: 'full',
    data: { component: ViewProductsComponent },
  },
  {
    path: 'vieworders',
    component: UserComponent,
    pathMatch: 'full',
    data: { component: ViewOrderComponent },
  },
  {
    path: 'viewcustomers',
    component: UserComponent,
    pathMatch: 'full',
    data: { component: ViewCustomersComponent },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
