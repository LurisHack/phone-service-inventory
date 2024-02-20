import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";
import {MenuController} from "@ionic/angular/standalone";

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

  constructor(private menuController: MenuController) { }

  ngOnInit() {}



  showMenu() {
      if (!window.history.state.menu) {
        const menuState = { menu: true };
        history.pushState(menuState, '');
      }
  }
}
