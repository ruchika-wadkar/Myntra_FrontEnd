import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductVo } from '../model/product';
import { ProductsService } from '../Services/products.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';
//

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
  products: Product[];
  productVo: ProductVo = new ProductVo();


  constructor(
    private service: ProductsService,
    private HttpClient: HttpClient,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}



    // GETTING THE PRODUCT

    ngOnInit(): void {
      this.getProducts();
    }
    getProducts() {
      this.HttpClient.get<any>('http://localhost:8702/api/v1/products').subscribe(
        (response) => {
          console.log(response);
          this.products = response;
        }
      );
    }


      // ADD TO CART

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(product);

    // window.alert('Your product has been added to the cart!');
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Product Added to Cart Successfully',
    });
  }
}
