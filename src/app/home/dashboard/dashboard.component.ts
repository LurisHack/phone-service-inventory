import { Component, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";
import {LurisLibraryModule} from "koluris-library";
import {addIcons} from "ionicons";
 import {IonTabs, IonTabBar, IonTabButton, IonIcon} from "@ionic/angular/standalone";
import {documentText, reader, speedometer} from "ionicons/icons";
import {AngularFirestore} from "@angular/fire/compat/firestore";

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


  constructor(private afs: AngularFirestore) {
    addIcons({ speedometer, documentText, reader });
  }

  ngOnInit() {

  }

}
