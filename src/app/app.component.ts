import {Component, HostListener} from '@angular/core';
import {IonicModule, IonMenu, Platform} from "@ionic/angular";
import {AutoCloseOverlaysService} from "./utility/services/autoCloseOverlays.service";
declare var StartAppAds:any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true,
  providers: [IonMenu, AutoCloseOverlaysService]
 })
export class AppComponent {
  constructor(private platform: Platform, private autoCloseOverlaysService: AutoCloseOverlaysService,) {



    // this.platform.ready().then(() => {
    //   console.log(this.platform.is('android'))
    //   if (this.platform.is("android")) {
    //     StartAppAds.init("201233460");
    //
    //     StartAppAds.showInterstitial();
    //     // Events you can subscribe to (recommended to put it in the constructor of any page):
    //
    //     document.addEventListener('startappads.interstitial.closed', () => {
    //       //interstitial closed by user
    //       //do something here
    //       this.showBanner()
    //     });
    //
    //     document.addEventListener('startappads.interstitial.displayed', () => {
    //       //interstitial showed up
    //       //do something here
    //     });
    //
    //     document.addEventListener('startappads.interstitial.clicked', () => {
    //       //interstitial clicked by user
    //       //do something here
    //     });
    //
    //     document.addEventListener('startappads.interstitial.not_displayed', () => {
    //       //interstitial loaded and ready but somehow not showed to user
    //       //do something here
    //     });
    //
    //     document.addEventListener('startappads.interstitial.load_fail', () => {
    //       //interstitial failed to load
    //       //do something here
    //     });
    //   }
    // })


  }

  // private showBanner() {
  //   setTimeout(() => {
  //
  //       StartAppAds.showBanner();
  //
  //         document.addEventListener('startappads.banner.load', () => {
  //           //banner has been loaded and displayed.
  //           //do something here
  //         });
  //
  //         document.addEventListener('startappads.banner.load_fail', () => {
  //           //banner failed to load
  //           //do something here
  //           //IMPORTANT: if banner failed to load dont use StartAppAds.showBanner(); again. StartAppAds will load a new one by itself!
  //         });
  //
  //         document.addEventListener('startappads.banner.clicked', () => {
  //           //banner has been clicked
  //           //do something here. Usefull to hide banner to prevent click bombing.
  //         });
  //
  //         document.addEventListener('startappads.banner.hide', () => {
  //           //banner has been removed
  //           //do something here
  //         });
  //
  //
  //   },5000)
  // }

  @HostListener('window:popstate', ['$event'])
  async onPopState() {
    console.log('on pause state')
    await this.autoCloseOverlaysService.trigger();
  }
}
