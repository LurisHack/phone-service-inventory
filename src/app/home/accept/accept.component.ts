import {Component, OnInit} from '@angular/core';
  import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

import {MultiListHeaderBlueprint, MultiListHeaderModel} from "../../utility/blueprint/multi-list.blueprint";
import {LurisLibraryModule} from "koluris-library";
import {MultiFormBluePrint, MultiFormModel} from "../../utility/blueprint/multi-form.blueprint";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss'],
  imports: [FormsModule, NgIf, IonicModule, LurisLibraryModule],
  standalone: true,
 })
export class AcceptComponent implements OnInit {


  segmentInitialValue = 'today-accept'

  openAdd = false;

  data: any[] = [];

  loaded = false

  header: MultiListHeaderModel[] = []

   //
  FormInput: MultiFormModel[] = [
    new MultiFormBluePrint('Name', 'Name', 0, 'text', null),
    new MultiFormBluePrint('Phone', 'Phone', 0, 'phone', null),
    new MultiFormBluePrint('Brand', 'Brand', 0, 'text', null),
    new MultiFormBluePrint('Model', 'Model', 0, 'text', null),
    new MultiFormBluePrint('Color', 'Color', 0, 'text', null),
    new MultiFormBluePrint('Error', 'Error', 0, 'text', null),
    new MultiFormBluePrint('Spare part fee', 'Part', 0, 'number', null),
    new MultiFormBluePrint('Charge', 'Charge', 0, 'number', null),
    new MultiFormBluePrint('Deposit', 'Deposit', 0, 'number', null),
  ]


  constructor() {
  }

  ngOnInit() {
    // setTimeout(() => {


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
        new MultiListHeaderBlueprint('Action', 'ion-hide-xl-down', {
          print: true,
          delete: true,
          edit: true,
          view: true,
          menu: true
        }),
      ];


      // this.FormInput =   [
      //   new MultiFormBluePrint('Name', 'Name', 0, 'text', null),
      //   new MultiFormBluePrint('Phone', 'Phone', 0, 'phone', null),
      //   new MultiFormBluePrint('Brand', 'Brand', 0, 'text', null),
      //   new MultiFormBluePrint('Model', 'Model', 0, 'text', null),
      //   new MultiFormBluePrint('Color', 'Color', 0, 'text', null),
      //   new MultiFormBluePrint('Error', 'Error', 0, 'text', null),
      //   new MultiFormBluePrint('Spare part fee', 'Part', 0, 'number', null),
      //   new MultiFormBluePrint('Charge', 'Charge', 0, 'number', null),
      //   new MultiFormBluePrint('Deposit', 'Deposit', 0, 'number', null),
      // ]



    // }, 500)
  }

  segmentEvent($event: any) {

  }

  // formOutput($event: MultiFormModel) {
  //    this.data.push($event)
  // }

  listReload() {

  }

  formOutput($event: MultiFormModel) {
    this.data.push($event)
  }
}
