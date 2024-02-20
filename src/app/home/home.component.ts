import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {IonicModule, IonMenu} from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {ProductShortcutPipe} from "./uitlity/pipes/product-shortcut.pipe";
import {TestingPipe} from "../testing.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    ProductShortcutPipe,
    NgForOf,
    TestingPipe
  ],
  standalone: true,
  providers: [IonMenu]
 })
export class HomeComponent  implements OnInit {



  projectShortcuts = [
    {id: 1, groupName: 'Home', name: 'Dashboard', icon: 'desktop', routerLink: 'dashboard', fragment: '', disabled: false},
   ]


  productCategories = [

    {id: 1, groupName: 'Home', name: 'Dashboard', icon: 'desktop', routerLink: 'dashboard', fragment: '', disabled: false},
    {id: 1, groupName: 'Home', name: 'Accept Today', icon: 'business', routerLink: 'accept-today', fragment: '',disabled: false},
    {id: 1, groupName: 'Home', name: 'Accepted List', icon: 'business', routerLink: 'accepted-list', fragment: '',disabled: false},


    {id: 1, groupName: 'Inventory', name: 'Order', icon: 'business', routerLink: 'order', fragment: '', disabled: false},
    {id: 2, groupName: 'Inventory', name: 'History', icon: 'home', routerLink: 'history', fragment: '', disabled: false},

    {id: 3, groupName: 'Setting', name: 'Shop Detail', icon: 'home', routerLink: 'shop-detail', fragment: '', disabled: false}

  ]

  @ViewChild('accordionGroup', { static: true }) accordionGroup: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    // this.ionMenu.ionDidOpen.subscribe(s => {
    //   console.log(s)
    //   if (!window.history.state.menu) {
    //     const menuState = { menu: true };
    //     history.pushState(menuState, '');
    //   }
    // })

    // this.ionMenu.ionWillClose.subscribe(s => {
    //   console.log(s)
    //   history.back()
    // })

    // this.menuController.toggle('phone-service-menu')
    //   .then( t => console.log(t))
  }

  async productCategoryEvent($event: any) {

    this.projectShortcuts = this.projectShortcuts.concat(this.projectShortcuts.filter(f => f.id === $event.id).length ? [] : [$event])

    const nativeEl = this.accordionGroup;
    nativeEl.value = undefined

    console.log($event)


    history.back();

    setTimeout(() => {
      this.router.navigate([$event.routerLink], {relativeTo: this.activatedRoute})
    }, 100)


  }

  logout() {
    this.router.navigateByUrl('/auth').then()
  }

    async menuItemClick($event: any) {

      history.back();

      setTimeout(() => {
        this.router.navigate([$event.routerLink], {relativeTo: this.activatedRoute})
      }, 100)


    }
}
