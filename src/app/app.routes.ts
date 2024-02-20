import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
  export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home/home.route').then(m => m.HomeRoute),

    },

    {
      path: 'auth',
      loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
    },



];
