import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";
import {MenuController} from "@ionic/angular/standalone";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  imports: [
    IonicModule,
    NgIf
  ],
  standalone: true
})
export class ChartComponent  implements OnInit {

  dashboardData: any;

  constructor(private menuController: MenuController, private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.doc('Home/dashboard')
      .snapshotChanges()
      .subscribe((dashBoardData: any) => {
        console.log(dashBoardData)
        console.log(dashBoardData.payload.data())
        this.dashboardData = dashBoardData.payload.data()
      })
  }



  showMenu() {
      if (!window.history.state.menu) {
        const menuState = { menu: true };
        history.pushState(menuState, '');
      }
  }
}
