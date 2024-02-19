import { Injectable, ViewChildren, QueryList } from '@angular/core';
import {
  IonRouterOutlet,
  ActionSheetController,
  PopoverController,
  ModalController,
  MenuController,
  ToastController,
  IonMenu
} from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoCloseOverlaysService {
  @ViewChildren(IonRouterOutlet) routerOutlets?: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

    constructor(
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private menu: MenuController,
    private ionMenu: IonMenu
  ) {





    this.ionMenu.ionDidOpen.subscribe(s => {
      console.log(s)
      if (!window.history.state.menu) {
        const menuState = { menu: true };
        history.pushState(menuState, '');
      }
    })





  }
  async trigger() {



    console.log('back button triggered');
    // close action sheet
    try {
      const element = await this.actionSheetCtrl.getTop();
      if (element) {
        await element.dismiss();
        return;
      }else {

      }
    } catch (error) {
    }

    // close popover
    try {
      const element = await this.popoverCtrl.getTop();
      if (element) {
        await element.dismiss();
        return;
      }
    } catch (e) {

    }

    // close modal
    try {
      const element = await this.modalCtrl.getTop();
      if (element) {
        await element.dismiss();
        return;
      }
    } catch (e) {

    }

    // close side menu
    try {
      const element = await this.menu.getOpen();
      if (element !== null) {
        await this.menu.close();
        return;
      }
    } catch (error) {
    }
  }
}
