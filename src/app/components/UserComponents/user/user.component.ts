import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { ViewProductsComponent } from '../view-products/view-products.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  activeTab: any = ViewProductsComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((element) => {
      if (element && element['component']) {
        this.activeTab = element['component'];
      }
    });
  }
}
