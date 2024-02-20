import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

import {MultiListHeaderBlueprint, MultiListHeaderModel} from "../../../utility/blueprint/multi-list.blueprint";
 import {MultiFormBluePrint, MultiFormModel} from "../../../utility/blueprint/multi-form.blueprint";
import {LurisLibraryModule} from "koluris-library";
import {ActivatedRoute, Router} from "@angular/router";
import {
  IonBadge,
  IonButton,
  IonContent, IonFooter,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonToolbar
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {add, close,  searchOutline} from "ionicons/icons";

@Component({
  selector: 'app-accept-today',
  templateUrl: './accept-today.component.html',
  styleUrls: ['./accept-today.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonBadge,
    IonIcon,
    IonButton,
    IonContent,
    IonFooter,
    FormsModule,
    NgIf,
    LurisLibraryModule,
  ],
  standalone: true,
 })
export class AcceptTodayComponent implements OnInit {


  segmentValue = 'accept-today-today'

  openAdd = false;

  data: any[] = [];


  header: MultiListHeaderModel[] = []

   //
  FormInput: MultiFormModel[] = []


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    addIcons({add, close, searchOutline})

    this.activatedRoute.fragment.subscribe(fragment => {
      console.log(fragment)
      this.segmentValue = fragment ?? 'accept-today-today';

      this.openAdd = true
    })


  }

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
        new MultiListHeaderBlueprint('Action', 'ion-hide-xl-down', {
          print: true,
          delete: true,
          edit: true,
          view: true,
          menu: true
        }),
      ];




      this.FormInput =   [
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

  }

  async segmentEvent($event: any) {
       await this.router.navigateByUrl('/home/accept#'+$event.detail.value)
  }

  // formOutput($event: MultiFormModel) {
  //    this.data.push($event)
  // }

  listReload() {

  }

  formOutput($event: MultiFormModel) {
    this.data.push($event)
  }

  addData() {
    this.openAdd = !this.openAdd
    console.log(this.openAdd)
  }
}
