import { Component, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";
import {LurisLibraryModule} from "koluris-library";
// import {documentText, reader, speedometer} from "ionicons/icons";
import {addIcons} from "ionicons";
 import {IonTabs, IonTabBar, IonTabButton, IonIcon} from "@ionic/angular/standalone";
import {documentText, reader, speedometer} from "ionicons/icons";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
     NgIf,
    LurisLibraryModule,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
  ],
  standalone: true
})
export class DashboardComponent  implements OnInit {

  constructor() {
    addIcons({ speedometer, documentText, reader });

  }

  ngOnInit() {}

}
