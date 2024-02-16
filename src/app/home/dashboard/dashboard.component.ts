import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    IonicModule,
    NgIf
  ],
  standalone: true
})
export class DashboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
