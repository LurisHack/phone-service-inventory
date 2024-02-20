import {Component, HostListener, Optional} from '@angular/core';
import {AlertController, IonApp, IonRouterOutlet, Platform} from '@ionic/angular/standalone';
import {AutoCloseOverlaysService} from "./utility/services/autoCloseOverlays.service";
import { App } from '@capacitor/app';
 declare var StartAppAds:any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],

})
export class AppComponent {
  constructor( private autoCloseOverlaysService: AutoCloseOverlaysService, private platform: Platform,
               private alertController: AlertController,
               @Optional() private routerOutlet?: IonRouterOutlet,
               ) {


    // this.ionMenu.ionDidOpen.subscribe(s => {
    //   console.log(s)
    //   if (!window.history.state.menu) {
    //     const menuState = { menu: true };
    //     history.pushState(menuState, '');
    //   }
    // })

    this.platform.ready().then(() => {
      console.log(this.platform.is('android'))
      if (this.platform.is("android")) {

        StartAppAds.init("201233460");

        this.showBanner()

        this.platform.backButton.subscribeWithPriority(-1, async () => {
          if (!this.routerOutlet?.canGoBack()) {
          const alertCtrl = await this.alertController.create({
             header: 'Close App',
              message: 'Are you sure to exit?',
             mode: 'ios',
            buttons: [
              {
                text: 'No',
                role: 'cancel',
              },
              {
                text: 'Yes',
                handler: async () =>  await App.exitApp()
              }
            ]
            })



            await alertCtrl.present();


          }
        });




        // StartAppAds.showInterstitial();
        // Events you can subscribe to (recommended to put it in the constructor of any page):

        // document.addEventListener('startappads.interstitial.closed', () => {
        //   //interstitial closed by user
        //   //do something here
        //   this.showBanner()
        // });
        //
        // document.addEventListener('startappads.interstitial.displayed', () => {
        //   //interstitial showed up
        //   //do something here
        // });
        //
        // document.addEventListener('startappads.interstitial.clicked', () => {
        //   //interstitial clicked by user
        //   //do something here
        // });
        //
        // document.addEventListener('startappads.interstitial.not_displayed', () => {
        //   //interstitial loaded and ready but somehow not showed to user
        //   //do something here
        //   this.showBanner()
        //
        // });
        //
        // document.addEventListener('startappads.interstitial.load_fail', () => {
        //   //interstitial failed to load
        //   //do something here
        // });
      }
    })


  }

  private showBanner() {

    console.log('banner loading')

         StartAppAds.showBanner();


      document.addEventListener('startappads.banner.load', () => {
            //banner has been loaded and displayed.
            //do something here
          });

          document.addEventListener('startappads.banner.load_fail', (b) => {
            //banner failed to load
            //do something here
            //IMPORTANT: if banner failed to load dont use StartAppAds.showBanner(); again. StartAppAds will load a new one by itself!

            console.log('banner load fail')
            console.log(b)
          });

          document.addEventListener('startappads.banner.clicked', () => {
            //banner has been clicked
            //do something here. Usefull to hide banner to prevent click bombing.
          });

          document.addEventListener('startappads.banner.hide', () => {
            //banner has been removed
            //do something here
          });


   }
  //
  @HostListener('window:popstate', ['$event'])
  async onPopState() {
    console.log('on pause state')
    await this.autoCloseOverlaysService.trigger();
  }
}
