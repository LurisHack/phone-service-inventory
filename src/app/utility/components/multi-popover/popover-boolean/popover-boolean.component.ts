import { Component, OnInit } from '@angular/core';
import {PopoverService} from "../service/poperover.service";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-popover-boolean',
  templateUrl: './popover-boolean.component.html',
  styleUrls: ['./popover-boolean.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class PopoverBooleanComponent{

  props: any;
  constructor(public POS: PopoverService) { }

  popoverBoolean(state: string) {
    console.log(state)

    console.log(this.props)
    this.POS.eventSubject.next({role: 'Boolean',   confirmState:  state, ...this.props})
  }
}
