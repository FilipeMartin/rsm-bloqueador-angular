import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuestGuard} from '@app/core/guards/guest.guard';
import {AuthGuard} from '@app/core/guards/auth.guard';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'login', 
    component: LoginComponent, 
    canActivate: [GuestGuard]
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
