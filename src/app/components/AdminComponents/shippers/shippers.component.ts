import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { shipper } from '../../model/shipper';
import Swal from 'sweetalert2';
import { ShipperService } from '../../Services/shipper.service';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css'],
})
export class ShippersComponent implements OnInit {
  shippers: shipper[];
  shipper: shipper = new shipper();

  closeResult: string;

  constructor(
    private service: ShipperService,
    private HttpClient: HttpClient,
    private route: ActivatedRoute,

    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.service.getShippers().subscribe((response) => {
      console.log(response);
      this.shippers = response;
      // this.shipper = response;
    });
  }

  open(contentshipper) {
    this.modalService
      .open(contentshipper, { ariaLabelledBy: 'modal-basic-title' })
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

  saveShipper() {
    this.service.saveShipper(this.shipper).subscribe((res) => {
      this.service.getShippers().subscribe((res) => {
        this.shipper = res;
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
    this.shipper = new shipper();
    // this.ngOnInit(); //reloads the table
  }
}
