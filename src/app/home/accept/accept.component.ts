import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ModalService} from "../../utility/components/modal/service/modal.service";
import {  ModalController} from "@ionic/angular/standalone";
import {MultiFormBluePrint, MultiFormModel} from "../../utility/blueprint/multi-form.blueprint";
import {MultiListHeaderBlueprint, MultiListHeaderModel} from '../../utility/blueprint/multi-list.blueprint';
import {MyLibraryModule} from "luris-library";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    NgIf,
    MyLibraryModule,
  ],
  standalone: true,
  providers: [ModalService, ModalController]
})
export class AcceptComponent implements OnInit {


  segmentInitialValue = 'today-accept'

  openAdd = false;

  data: any[] = [];


  header: MultiListHeaderModel[] = [
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

  FormInput = [
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


  constructor(public MS: ModalService) {
  }

  ngOnInit() {
  }

  segmentEvent($event: any) {

  }

  formOutput($event: MultiFormModel) {
     this.data.push($event)
  }

  listReload() {

  }
}
