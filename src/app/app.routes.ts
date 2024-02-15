import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
  export const routes: Routes = [

    {
      path: 'auth',
      component: AuthComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
      children:[
        {
          path: 'dashboard',
          loadComponent: () => import('./home/dashboard/dashboard.component').then(m => m.DashboardComponent)
        },
        {
          path: 'accept',
          loadComponent: () => import('./home/accept/accept.component').then(m => m.AcceptComponent)
        },
        // {
        //   path: '',
        //   redirectTo: 'dashboard',
        //   pathMatch: "full"
        // }
      ]
    },
    {
      path: '',
      redirectTo: 'auth',
      pathMatch: "full"
    }

];
