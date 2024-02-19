import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

export const DashboardRoute: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'chart',
        loadComponent: () => import('./chart/chart.component').then(m => m.ChartComponent)
      },
      {
        path: 'accept-today',
        loadComponent: () => import('./accept-today/accept-today.component').then(m => m.AcceptTodayComponent)
      },
      {
        path: 'accepted-list',
        loadComponent: () => import('./accepted-list/accepted-list.component').then(m => m.AcceptedListComponent)
      },
      {
        path: '',
        redirectTo: 'chart',
        pathMatch: "full"
      }
    ]
  }
]
