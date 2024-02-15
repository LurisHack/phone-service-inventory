import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ModalService} from "../../service/modal.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class ViewComponent  implements OnInit {

  props: any
  constructor(public MS: ModalService) { }

  ngOnInit() {
    console.log(this.props)
  }

}
