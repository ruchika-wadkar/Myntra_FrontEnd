import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from './components/Services/products.service';
import { CartComponent } from './components/cart/cart.component';
import { ShippersComponent } from './components/shippers/shippers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerDetailsComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ShippersComponent,
    OrdersComponent,
    ViewProductsComponent,
    ViewCustomersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    NgbModule,
   
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
