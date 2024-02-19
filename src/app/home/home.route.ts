import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";


export const HomeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'accept',
        loadComponent: () => import('./accept/accept.component').then(m => m.AcceptComponent)
      },
      {
        path: 'order',
        loadComponent: () => import('./inventory/order/order.component').then(m => m.OrderComponent)
      },
      {
        path: 'history',
        loadComponent: () => import('./inventory/history/history.component').then(m => m.HistoryComponent)
      },
      {
        path: 'shop-detail',
        loadComponent: () => import('./setting/shop-detail/shop-detail.component').then(m => m.ShopDetailComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
      }
    ]
  }
]
