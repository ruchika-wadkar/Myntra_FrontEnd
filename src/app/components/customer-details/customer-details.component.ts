import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { customer } from '../model/customer';
import Swal from 'sweetalert2';
import { CustomerService } from '../Services/customer.service';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {
  customers: customer[];
  customer: customer = new customer();
  closeResult: string;

  constructor(
    private HttpClient: HttpClient,
    private modalService: NgbModal,
    private service: CustomerService
  ) {}

  ngOnInit(): void {
    this.service.getcustomer().subscribe((response) => {
      console.log(response);
      this.customers = response;
    });
  }

  savecustomer() {
    this.service.savecustomer(this.customer).subscribe((res) => {
      this.service.getcustomer().subscribe((res) => {
        this.customer = res;
        this.modalService.dismissAll();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Supplier Added Successfully',
        });
        this.ngOnInit(); //reloads the table
      });
    });
    this.customer = new customer();
    // this.ngOnInit(); //reloads the table
  }

  // UPDATE MAPPING

  customerToUpdate = {
    customerID: 0,
    customerName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  };

  edit(customer) {
    this.customerToUpdate = customer;
  }

  updatecustomer() {
    this.service.updatecustomer(this.customerToUpdate).subscribe((resp) => {
      console.log(resp);
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

  // DELETE MAPPING
  deletecustomer(pid: number) {
    this.service.deletecustomer(pid).subscribe(
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
          title: 'Customer Deleted Successfully',
        });
        this.ngOnInit();
      }
      // err =>{
      //   console.log(err);
      // }
    );
  }

  open(content3) {
    this.modalService
      .open(content3, { ariaLabelledBy: 'myModalLabel' })
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
}
