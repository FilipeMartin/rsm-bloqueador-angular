import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'administrativo',
        pathMatch: 'full'
      },
      {
        path: 'administrativo',
        // canLoad: [], // @todo Futuro guard para usuários administrativos
        loadChildren: () => import('./administrativo/administrativo.module').then(m => m.AdministrativoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
