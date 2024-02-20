import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-accepted-list',
    templateUrl: './accepted-list.component.html',
    styleUrls: ['./accepted-list.component.scss'],
    imports: [
        IonicModule
    ],
    standalone: true
})
export class AcceptedListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
