import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ScrollingModule} from "@angular/cdk/scrolling";
 import {NgClass, NgForOf, NgIf, NgStyle, SlicePipe} from "@angular/common";
import {IonicModule} from "@ionic/angular";


@Component({
  selector: 'luris-multi-list',
  templateUrl: './luris-multi-list.component.html',
  styleUrls: ['./luris-multi-list.component.scss'],
  imports: [
    ScrollingModule,
    NgForOf,
    NgIf,
    SlicePipe,
    NgStyle,
    NgClass,
    IonicModule
  ],
  standalone: true
})
export class LurisMultiListComponent  implements OnInit {

  @ViewChild('divElement') divElement?: ElementRef;


  @Input() header?: {
    name: string,
    hide: string,
    data?: {
      print: boolean,
      delete: boolean,
      edit: boolean,
      view: boolean,
      menu: boolean
    }
  }[];

  @Input() data: any[] = [];
  @Input() itemSize = 32;


  ngOnInit() {


  }

  async itemEvent(state: 'Print' | 'Delete' | 'Edit' | 'ViewDetail', data: any, e: any) {

    console.log(data)

    switch (state) {
      case 'Print':


        break;

      case 'Edit':

        break;

      case 'Delete':


        break;
    }


  }


  handleRefresh(event: { target: { complete: () => void; }; }) {

  }


  scrollingIndex($event: number) {

  }

}
