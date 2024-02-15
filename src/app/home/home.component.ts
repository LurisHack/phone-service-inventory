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
    {id: 1, groupName: 'Dashboard', name: 'Dashboard', icon: 'desktop', routerLink: 'dashboard', disabled: false},
    {id: 1, groupName: 'Management', name: 'Accept', icon: 'business', routerLink: 'accept', disabled: false},

  ]


  productCategories = [
    {id: 1, groupName: 'Inventory', name: 'Order', icon: 'business', routerLink: 'order-list', disabled: false},
    {id: 2, groupName: 'Inventory', name: 'History', icon: 'home', routerLink: 'history', disabled: false},

    {id: 3, groupName: 'Setting', name: 'Shop Detail', icon: 'home', routerLink: 'shop-detail', disabled: false}

  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {}

  async productCategoryEvent($event: any) {

    this.projectShortcuts = this.projectShortcuts.concat(this.projectShortcuts.filter(f => f.id === $event.id).length ? [] : [$event])

    const nativeEl = this.accordionGroup;
    nativeEl.value = undefined

    await this.router.navigate([$event.routerLink], {relativeTo: this.activatedRoute})


  }

  logout() {
    this.router.navigateByUrl('/auth').then()
  }
}
