import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {IonAccordionGroup} from "@ionic/angular/standalone";
import {ProductShortcutPipe} from "./uitlity/pipes/product-shortcut.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    NgForOf,
    ProductShortcutPipe
  ],
  standalone: true
})
export class HomeComponent  implements OnInit {

  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup | any;


  projectShortcuts = [
    {id: 1, groupName: 'Dashboard', name: 'Dashboard', icon: 'desktop', routerLink: 'dashboard', fragment: '', disabled: false},
    {id: 1, groupName: 'Management', name: 'Accept', icon: 'business', routerLink: 'accept', fragment: 'accept-today',disabled: false},

  ]


  productCategories = [
    {id: 1, groupName: 'Inventory', name: 'Order', icon: 'business', routerLink: 'order', fragment: '', disabled: false},
    {id: 2, groupName: 'Inventory', name: 'History', icon: 'home', routerLink: 'history', fragment: '', disabled: false},

    {id: 3, groupName: 'Setting', name: 'Shop Detail', icon: 'home', routerLink: 'shop-detail', fragment: '', disabled: false}

  ]

  constructor(private router: Router) { }

  ngOnInit() {}

  async productCategoryEvent($event: any) {

    this.projectShortcuts = this.projectShortcuts.concat(this.projectShortcuts.filter(f => f.id === $event.id).length ? [] : [$event])

    const nativeEl = this.accordionGroup;
    nativeEl.value = undefined

    console.log($event)

    await this.router.navigateByUrl('home/'+$event.routerLink +'#'+$event.fragment)


  }

  logout() {
    this.router.navigateByUrl('/auth').then()
  }
}
