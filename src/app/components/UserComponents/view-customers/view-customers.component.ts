import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { customer } from '../../model/customer';
import Swal from 'sweetalert2';
import { CustomerService } from '../../Services/customer.service';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
})
export class ViewCustomersComponent implements OnInit {
  customers: customer[];
  customer: customer = new customer();
  closeResult: string;

  constructor(
    private HttpClient: HttpClient,
    private modalService: NgbModal,
    private service: CustomerService
  ) {}
  ngOnInit(): void {}

  savecustomer() {
    this.service.savecustomer(this.customer).subscribe((res) => {
      this.service.getcustomer().subscribe((res) => {
        this.customer = res;
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
          title: 'Customer Added Successfully',
        });
        this.ngOnInit(); //reloads the table
      });
    });
    this.customer = new customer();
    this.ngOnInit(); //reloads the table
    window.location.href = 'http://localhost:9098';
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
