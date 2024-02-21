import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ModalService} from "../../service/modal.service";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    NgIf,
    KeyValuePipe
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
