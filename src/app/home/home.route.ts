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
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
      }
    ]
  }
]
