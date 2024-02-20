import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";

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

  constructor() { }

  ngOnInit() {}

}
