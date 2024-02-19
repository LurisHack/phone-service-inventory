import {Component} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
 import {IonicModule} from "@ionic/angular";
import {LurisLibraryModule} from "koluris-library";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [HttpClientModule, NgIf, CommonModule, IonicModule, LurisLibraryModule],
  standalone: true,
  providers: [HttpClient]
})
export class AuthComponent{

  showForm = true;

  alert: { hasState: boolean, backgroundColor: string, color: string, text: string } =
    {hasState: false, backgroundColor: '', color: '', text: ''}

  constructor(private router: Router) {}


  formOutput($event: { email: string; password: string; state: string }) {
    console.log($event)
    this.router.navigateByUrl('/home').then()

  }
}
