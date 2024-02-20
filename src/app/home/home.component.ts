import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {IonicModule, IonMenu} from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {ProductShortcutPipe} from "./uitlity/pipes/product-shortcut.pipe";
import {TestingPipe} from "../testing.pipe";
import {addIcons} from "ionicons";
import {
  documentTextOutline,
  libraryOutline, logOutOutline,
  readerOutline,
  receiptOutline,
  speedometerOutline,
  storefront,
  storefrontOutline
} from "ionicons/icons";

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
    {id: 1, groupName: 'Home', name: 'Dashboard', icon: 'speedometer', routerLink: 'dashboard/chart', fragment: '', disabled: false},
   ]


  productCategories = [

    {id: 1, groupName: 'Home', name: 'Dashboard', icon: 'speedometer', routerLink: 'dashboard/chart', fragment: '', disabled: false},
    {id: 1, groupName: 'Home', name: 'Accept Today', icon: 'document-text', routerLink: 'dashboard/accept-today', fragment: '',disabled: false},
    {id: 1, groupName: 'Home', name: 'Accepted List', icon: 'reader', routerLink: 'dashboard/accepted-list', fragment: '',disabled: false},


    {id: 1, groupName: 'Inventory', name: 'Order', icon: 'receipt', routerLink: 'order', fragment: '', disabled: false},
    {id: 2, groupName: 'Inventory', name: 'History', icon: 'library', routerLink: 'history', fragment: '', disabled: false},

    {id: 3, groupName: 'Setting', name: 'Shop Detail', icon: 'storefront', routerLink: 'shop-detail', fragment: '', disabled: false}

  ]

  @ViewChild('accordionGroup', { static: true }) accordionGroup: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    addIcons({speedometerOutline, documentTextOutline, readerOutline, receiptOutline, libraryOutline,
      storefront, logOutOutline,
      storefrontOutline})
  }

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

    console.log(this.activatedRoute)



      if (window.history.state.menu) {
        history.back();
      }


    setTimeout(() => {
      this.router.navigate([`home/${$event.routerLink}`], {replaceUrl: true})
      // this.router.navigate([$event.routerLink], {relativeTo: this.activatedRoute})
    }, 100)


  }

  logout() {
    this.router.navigateByUrl('/auth').then()
  }

    async menuItemClick($event: any) {

      if (window.history.state.menu) {
        history.back();
      }

      setTimeout(() => {
        this.router.navigate([`home/${$event.routerLink}`], {replaceUrl: true})

        // this.router.navigate([$event.routerLink], {relativeTo: this.activatedRoute})
      }, 100)


    }
}
