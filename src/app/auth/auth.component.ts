import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {MyLibraryModule} from "luris-library";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonicModule, MyLibraryModule, HttpClientModule, NgIf, MyLibraryModule],
  standalone: true,
  providers: [HttpClient]
})
export class AuthComponent{

  showForm = true;

  alert: { hasState: boolean, backgroundColor: string, color: string, text: string } =
    {hasState: false, backgroundColor: '', color: '', text: ''}

  constructor(private router: Router) {
  }


  formOutputData($event: { email: string; password: string, state: string }) {

    this.router.navigateByUrl('/home').then()


    return



  }

}
