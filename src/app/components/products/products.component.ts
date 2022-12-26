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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productVo: ProductVo = new ProductVo();

  closeResult: string;

  constructor(
    private service: ProductsService,
    private HttpClient: HttpClient,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

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

  //UPDATE THE PRODUCT
  productToUpdate = {
    productName: '',
    unit: 0,
    price: 0,
    supplierID: 0,
  };

  edit(productVo) {
    this.productToUpdate = productVo;
    this.productToUpdate.supplierID = productVo.supplier.supplierID;
  }

  updateProduct() {
    this.service.updateProduct(this.productToUpdate).subscribe((respu) => {
      console.log(respu);
      this.modalService.dismissAll();
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
        title: 'Product Edited Successfully',
      });
      this.ngOnInit();
    });
  }

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

  // OPENING THE MODAL

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //DELETING THE PRODUCT

  deleteProduct(pid: number) {
    this.service.deleteProduct(pid).subscribe(
      (resp) => {
        console.log(resp);
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
          title: 'Product Deleted Successfully',
        });
        this.ngOnInit();
      }
      // err =>{
      //   console.log(err);
      // }
    );
  }

  onSubmit(f: NgForm) {
    const url = 'http://localhost:8702/api/v1/products';
    // this.HttpClient.post(url, f.value)
    //   .subscribe((result) => {
    //
    //   });

    this.productVo = {
      price: f.value.price as number,
      unit: f.value.unit as number,
      productName: f.value.productName as string,
      supplierID: f.value.supplierID as number,
    };
    // console.log(this.productVo);
    this.service.saveProduct(this.productVo).subscribe((res) => {
      this.modalService.dismissAll(); //dismiss the modal
      // alert("Product Added Successfully");
      // Swal.fire('Product Added Successfully!')
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
        title: 'Product Added Successfully',
      });
      this.ngOnInit(); //reload the table
    });

    // public saveProduct(){
    //   this.service.saveProduct(this.productVo)
    //     .subscribe(res => {
    //       alert(res)
    //     },
    //       (error: any) => {
    //         console.log(error)
    //         alert(error.error)
    //       });
    //   this.productVo = new ProductVo();
    // }
  }
}
