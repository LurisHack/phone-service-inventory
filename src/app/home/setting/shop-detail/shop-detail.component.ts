import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {LurisLibraryModule} from "koluris-library";
import {NgIf} from "@angular/common";
import {MultiFormBluePrint, MultiFormModel} from "../../../utility/blueprint/multi-form.blueprint";

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
  imports: [
    IonicModule,
    LurisLibraryModule,
    NgIf
  ],
  standalone: true
})
export class ShopDetailComponent implements OnInit {

  openAdd = false;
  FormInput: MultiFormModel[] = [];


  constructor() {
  }

  ngOnInit() {

    this.FormInput = [
      new MultiFormBluePrint('ShopName', 'ShopName', 0, 'text', null),
      new MultiFormBluePrint('Phone', 'Phone', 0, 'phone', null),
      new MultiFormBluePrint('Address', 'Brand', 0, 'text', null),
      new MultiFormBluePrint('Rules', 'Rules', 0, 'text', null),
    ]

  }

  setShopDetail() {

  }

  formOutput($event: MultiFormModel) {

  }
}
