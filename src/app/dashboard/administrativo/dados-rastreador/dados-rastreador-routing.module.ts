import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DadosRastreadorComponent } from './dados-rastreador.component';
import { PosicoesComponent } from './posicoes/posicoes.component';
import { EventosComponent } from './eventos/eventos.component';


const routes: Routes = [
  {
    path: '',
    component: DadosRastreadorComponent,
    children: [
      {
        path: '',
        redirectTo: 'posicoes',
        pathMatch: 'full'
      },
      {
        path: 'posicoes',
        component: PosicoesComponent,
        data: { breadcrumb: 'Posições' }
      },
      {
        path: 'eventos',
        component: EventosComponent,
        data: { breadcrumb: 'Eventos' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosRastreadorRoutingModule { }
