import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module'
import { TrackerComponent } from './tracker/tracker.component'



const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },  
  {
    path: 'tracker',
    children: [
      {
        path: '',
        component: TrackerComponent
      },
      {
        path: ':id',
        component: TrackerComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
