import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class ShopDetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  setShopDetail() {

  }
}
