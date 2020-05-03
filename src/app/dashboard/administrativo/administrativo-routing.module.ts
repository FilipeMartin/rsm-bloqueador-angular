import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativoComponent } from './administrativo.component';


const routes: Routes = [
  {
    path: '',
    component: AdministrativoComponent,
    children: [
      {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full'
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
        data: { breadcrumb: 'Usuários' }
      },
      {
        path: 'veiculos',
        loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule),
        data: { breadcrumb: 'Veículos' }
      },
      {
        path: 'dados-rastrador',
        loadChildren: () => import('./dados-rastreador/dados-rastreador.module').then(m => m.DadosRastreadorModule),
        data: { breadcrumb: 'Dados Rastreador' }
      },
      {
        path: 'configuracao',
        loadChildren: () => import('./configuracao/configuracao.module').then(m => m.ConfiguracaoModule),
        data: { breadcrumb: 'Configuração' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativoRoutingModule {
}
