import {Injectable} from "@angular/core";
import {ModalController} from "@ionic/angular/standalone";
import {ModalModel} from "../model/modal.model";

@Injectable()
export class ModalService{

  constructor(private modalController: ModalController) {
  }

  async openModel(modalObject: ModalModel){

     const model = async () => {


      if (!window.history.state.modal) {
        const modalState = { modal: true };
        history.pushState(modalState, '');
      }



      const modal = await  this.modalController.create({
        component: modalObject.component,
        componentProps: {props: modalObject.props},
        backdropDismiss: modalObject.backdropDismiss,
      })
      await modal.present()
    }

    const modalCtrl = await this.modalController.getTop();
    if (modalCtrl?.present){
      modalCtrl.dismiss()
        .then(async () => {
        await model()
        })
    }else {
      await model();
    }
  }

  async dismissModal(){
   return  this.modalController.getTop()
      .then((t) => {
        if (t){
          this.modalController.dismiss()
        }
      })
  }

  closeModal() {
    history.back()
  }

}
