import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AdministradoresComponent } from './administradores/administradores.component';


const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: '',
        redirectTo: 'clientes',
        pathMatch: 'full'
      },
      {
        path: 'clientes',
        component: ClientesComponent,
        data: { breadcrumb: 'Clientes' }
      },
      {
        path: 'administradores',
        component: AdministradoresComponent,
        data: { breadcrumb: 'Administradores' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
