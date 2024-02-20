import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment.prod';
 import {provideRouter, RouteReuseStrategy} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {  USE_EMULATOR as USE_AUTH_EMULATOR,  } from '@angular/fire/compat/auth';
import {  USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getFunctions, provideFunctions} from "@angular/fire/functions";
import {getMessaging, provideMessaging} from "@angular/fire/messaging";
import {getPerformance, providePerformance} from "@angular/fire/performance";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {routes} from "./app/app.routes";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {bootstrapApplication} from "@angular/platform-browser";
import {IonicRouteStrategy, provideIonicAngular} from "@ionic/angular/standalone";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));


bootstrapApplication(AppComponent, {
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
    // {
    //   provide: SETTINGS,
    //   useValue: environment.production ? undefined : {
    //     host: 'http://192.168.1.7',
    //     ssl: false
    //   }
    // },

    {
      provide: USE_AUTH_EMULATOR, useValue: environment.production ? undefined : ['http://192.168.1.7:9099']} ,
    { provide: USE_FIRESTORE_EMULATOR, useValue: environment.production ? undefined : ['192.168.1.7', 8080] },
    provideIonicAngular(),
     provideRouter(routes),
    importProvidersFrom([
         provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth() ),
      provideFirestore(() => getFirestore()),
      provideFunctions(() => getFunctions()),
      provideMessaging(() => getMessaging()),
      providePerformance(() => getPerformance()),
      provideStorage(() => getStorage())
    ])
  ],
}).then();
