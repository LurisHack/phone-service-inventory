import { Injectable } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  constructor(private LC: LoadingController) { }

  ngOnInit() {}

  async startLoading(){

    const loadingFun = async () => {
      const loading = await this.LC.create({
        message: 'loading..',
        showBackdrop: false,
        backdropDismiss: false
      })

      await loading.present();
    }

    await this.LC.getTop()
      .then((l) => {
        if (l){
          this.LC.dismiss()
          loadingFun();
        }else {
          loadingFun();
        }
      })

  }

  async dismissLoading(){
    await this.LC.dismiss()
  }

}
