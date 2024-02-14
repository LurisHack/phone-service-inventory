import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ProgressService} from "../utility/service/progress.service";
import {MyLibraryModule} from "luris-library";
import {catchError, from, Observable, throwError} from "rxjs";
import {FirebaseAuthService} from "../utility/service/firebase/firebase-auth.service";
import {UserDataService} from "../utility/service/user-data.service";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {updatePassword} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {FiresStoreService} from "../utility/service/firebase/firebase-firestore.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonicModule, MyLibraryModule, HttpClientModule, NgIf],
  standalone: true,
  providers: [ProgressService, FirebaseAuthService, HttpClient]
})
export class AuthComponent{

  showForm = true;

  alert: { hasState: boolean, backgroundColor: string, color: string, text: string } =
    {hasState: false, backgroundColor: '', color: '', text: ''}

  constructor(public PS: ProgressService, private FAS: FirebaseAuthService,
              private userData: UserDataService, private http: HttpClient,
              private router: Router, private FSS: FiresStoreService) {
  }


  formOutputData($event: { email: string; password: string, state: string }) {

    let obs: Observable<any>;

    this.PS.loadingState = true;
    this.PS.loadProgress({progress: 0.5, text: 'Please Wait'})
    this.alert.hasState = false

    const obsVal = () => {

      obs.subscribe({
        next: (data) => {
          console.log(data)


          // if (!data.emailVerified){
          //   this.PS.loadingState = false;
          //   this.PS.endProgress()
          //   this.alert = {hasState: true, backgroundColor:'red', color: 'white', text: 'Please email verify first!'}
          //   return
          // }


          this.userData.customClaim$?.subscribe(claim => {

            if (!claim) {
              return;
            }


            this.router.navigateByUrl(claim.redirectUrl)
              .then(() => {
                this.PS.loadingState = false;
                this.PS.loadProgress({progress: 1, text: 'Please Wait'})
                this.PS.endProgress()
              })

          })


        }, error: (err) => {
          console.log(err.message)
          this.alert = {hasState: true, backgroundColor: 'red', color: 'white', text: err.message}
          this.PS.loadingState = false
          this.PS.endProgress();
        }
      })

    }

    switch ($event.state) {
      case 'Register':
        this.http.post(environment.api.createUser, {
          email: $event.email,
          password: $event.password,
          "permissions": {
            "mainAdmin": true
          },
          "redirectUrl": "/"
        })
          .pipe(
            catchError(err => {
               // alert(err.error.message);
              this.PS.loadingState = false;
              this.alert = {hasState: true, backgroundColor: 'red', color: 'white', text: err.error.message}

              return  throwError(() => {err.error.message
                const error: any = new Error(`This is error  ${ err.error.message }`);
                 return error;
              });
              // return
            })
          )
          .subscribe(async () => {
            this.PS.loadingState = false;
            this.showForm = false;
            this.alert = {hasState: true, backgroundColor: 'red', color: 'white', text: "Successfully registered. Please login to work."}

            setTimeout(() => {
              this.showForm = true
            })

           });


        // obs = from(this.FAS.firebaseRegister({email: $event.email, password: $event.password}))
        break;

      case 'Login':
        obs = from(this.FAS.firebaseLogin({email: $event.email, password: $event.password}))

        obsVal();
        break;
    }


    // }


  }

  protected readonly updatePassword = updatePassword;

  updateUserPassword() {
    this.FAS.updatePassword()
  }
}
