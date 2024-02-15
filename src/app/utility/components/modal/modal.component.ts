import {Component, Injector, Input, OnInit} from '@angular/core';
 import { IonContent } from "@ionic/angular/standalone";
 import { createCustomElement } from "@angular/elements";
import {DomSanitizer} from "@angular/platform-browser";
import {ModalModel} from "./model/modal.model";
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [
    IonContent
  ],
  standalone: true
})
export class ModalComponent  implements OnInit{

  history: any;
  content: any;
  @Input() modalObj: ModalModel | any;
  constructor(private injector: Injector, private domSanitizer: DomSanitizer) { }


  ngOnInit() {

    // if (!window.history.state.modal) {
    //   const modalState = { modal: true };
    //   history.pushState(modalState, '');
    // }
    //
    //   const alertElement = createCustomElement(this.modalObj.chooseComponent, {injector: this.injector})
    //   if (!customElements.get('app-selected-component')){
    //   customElements.define('app-selected-component', alertElement)
    //   }
    //   this.content = this.domSanitizer.bypassSecurityTrustHtml(`<app-selected-component></app-selected-component>`);
    // }
    //
  }


}
