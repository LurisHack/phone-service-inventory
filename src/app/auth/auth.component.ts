import {Component} from '@angular/core';
 import {Router} from "@angular/router";
  import {LurisLibraryModule} from "koluris-library";
import {IonCard, IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    LurisLibraryModule,
    IonGrid,
    IonCard,
    IonRow,
    IonCol
  ],
})
export class AuthComponent{

  //
  // alert: { hasState: boolean, backgroundColor: string, color: string, text: string } =
  //   {hasState: false, backgroundColor: '', color: '', text: ''}
  //
  constructor(private router: Router) {}
  //
  //
  // formOutput($event: { email: string; password: string; state: string }) {
  //   console.log($event)
  //   this.router.navigateByUrl('/home').then()
  //
  // }
  formOutput($event: { email: string; password: string; state: string }) {
    this.router.navigateByUrl('/home').then()
  }
}
