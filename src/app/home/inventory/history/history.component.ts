import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {LurisLibraryModule} from "koluris-library";
import {MultiListHeaderBlueprint, MultiListHeaderModel} from "../../../utility/blueprint/multi-list.blueprint";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  imports: [
    IonicModule,
    LurisLibraryModule
  ],
  standalone: true
})
export class HistoryComponent  implements OnInit {
  data: any[] = [];
  header: MultiListHeaderModel[] = []


  constructor() { }

  ngOnInit() {
    this.header = [
      new MultiListHeaderBlueprint('Name', '', undefined),
      new MultiListHeaderBlueprint('Phone', 'ion-hide-xl-down', undefined),
      new MultiListHeaderBlueprint('Brand', '', undefined),
      new MultiListHeaderBlueprint('Model', 'ion-hide-xs-down', undefined),
      new MultiListHeaderBlueprint('Color', 'ion-hide-xl-down', undefined),
      new MultiListHeaderBlueprint('Error', 'ion-hide-md-down', undefined),
      new MultiListHeaderBlueprint('Part', 'ion-hide-lg-down', undefined),
      new MultiListHeaderBlueprint('Charge', 'ion-hide-lg-down', undefined),
      new MultiListHeaderBlueprint('Deposit', 'ion-hide-lg-down', undefined),
    ];
  }

  listReload() {

  }

  showMenu() {
    if (!window.history.state.menu) {
      const menuState = { menu: true };
      history.pushState(menuState, '');
    }
  }
}
