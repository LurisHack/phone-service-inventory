import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";


export const HomeRoute: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.route').then(m => m.DashboardRoute)
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
        redirectTo: '/home/dashboard',
        pathMatch: "full"
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: "full"
  }
]
