import {Injectable} from "@angular/core";
import {PopoverController} from "@ionic/angular";
import {Subject} from "rxjs";
import {PopoverModel} from "../model/popover.model";

@Injectable({providedIn: "root"})
export class PopoverService{

  textForBoolean = ''
   dataForList: any[] = []
  eventSubject = new Subject()
  popoverObj: any;

  constructor(private POC: PopoverController) {}

  async openPopover(popoverObject: PopoverModel){
    const popover = async () => {

      if (!window.history.state.popover) {
        const popoverState = { popover: true };
        history.pushState(popoverState, '');
      }


      const popover = await  this.POC.create({
        component: popoverObject.component,
        componentProps: popoverObject,
        backdropDismiss: popoverObject.backdropDismiss,
        event: popoverObject.event,
        showBackdrop: false
      })


      await popover.present()
    }

    const modalCtrl = await this.POC.getTop();
    if (modalCtrl?.present){
      modalCtrl.dismiss()
        .then(async () => {
          await popover()
        })
    }else {
      await popover();
    }
  }



  async popoverDismiss(){
     return  this.POC.getTop()
       .then(t => {
         if(t){
           this.POC.dismiss()
         }
       })
  }

}
