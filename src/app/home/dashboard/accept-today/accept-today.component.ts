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
  IonMenuButton, IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {add, checkmarkOutline, close, printOutline, searchOutline, trashOutline} from "ionicons/icons";
import {ModalService} from "../../../utility/components/modal/service/modal.service";
import {ViewComponent} from "../../../utility/components/modal/component/view/view.component";

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
    IonTitle,
  ],
  standalone: true,
  providers: [ModalService, ModalController]
})
export class AcceptTodayComponent implements OnInit {


  segmentValue = 'accept-today-today'

  openAdd = false;

  data: any[] = [];

  header: MultiListHeaderModel[] = []

  FormInput: MultiFormModel[] = []


  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private modalService: ModalService) {

    addIcons({add, close, searchOutline, printOutline, checkmarkOutline, trashOutline})

    this.activatedRoute.fragment.subscribe(fragment => {
      console.log(fragment)
      this.segmentValue = fragment ?? 'accept-today-today';

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


    this.FormInput = [
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
    await this.router.navigateByUrl('/home/accept#' + $event.detail.value)
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

  showMenu() {
    if (!window.history.state.menu) {
      const menuState = {menu: true};
      history.pushState(menuState, '');
    }
  }

  async itemClickEvent($event: any) {
    switch ($event.state) {
      case 'View':

        await this.modalService.openModel({
            props: $event.data,
            component: ViewComponent,
            backdropDismiss: true
          }
        )

        break;
    }
  }

  scrollEvent($event: any) {
    console.log($event)
  }
}
