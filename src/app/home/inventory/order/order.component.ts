import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";
import {MultiFormBluePrint, MultiFormModel} from "../../../utility/blueprint/multi-form.blueprint";
import {LurisLibraryModule} from "koluris-library";
import {MultiListHeaderBlueprint} from "../../../utility/blueprint/multi-list.blueprint";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  imports: [
    IonicModule,
    NgIf,
    LurisLibraryModule
  ],
  standalone: true
})
export class OrderComponent  implements OnInit, OnDestroy {

   openAdd = false;

  FormInput: MultiFormModel[]  = [];
  Header: any[] = [];
  Data: any[] = [];


  ngOnInit() {
    this.FormInput= [
      new MultiFormBluePrint('Brand', 'Brand', 0, 'text', null),
      new MultiFormBluePrint('Model', 'Model', 0, 'phone', null),
      new MultiFormBluePrint('Part', 'Part', 0, 'text', null),
    ]

    this.Header = [
      new MultiListHeaderBlueprint('Brand', '', undefined),
      new MultiListHeaderBlueprint('Model', '', undefined),
      new MultiListHeaderBlueprint('Part', '', undefined),
      new MultiListHeaderBlueprint('Action', 'ion-hide-xl-down', {
        print: true,
        delete: true,
        edit: true,
        view: true,
        menu: true
      }),
    ];




  }

  listReload() {

  }

  formOutput($event: MultiFormModel) {
    console.log($event)
    this.Data.push($event)
  }

  ngOnDestroy(): void {
    console.log('order page destory')
  }

  showMenu() {
    if (!window.history.state.menu) {
      const menuState = { menu: true };
      history.pushState(menuState, '');
    }
  }
}
