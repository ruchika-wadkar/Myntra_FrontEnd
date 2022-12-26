import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { shipper } from '../components/model/shipper';
import { ShipperService } from '../components/Services/shipper.service';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css'],
})
export class ShippersComponent {
  // shipper: shipper[];
  shipper = null;

  constructor(
    private service: ShipperService,
    private HttpClient: HttpClient,
    private modalService: NgbModal
  ) {
    this.getShippers();
  }

  getShippers() {
    this.service.getShippers().subscribe((response) => {
      console.log(response);
      this.shipper = response;
      // this.shipper = response;
    });
  }
}
