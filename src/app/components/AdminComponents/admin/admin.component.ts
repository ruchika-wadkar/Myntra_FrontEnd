import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  activeTab: any = ProductsComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((element) => {
      if (element && element['component']) {
        this.activeTab = element['component'];
      }
    });
  }
}
