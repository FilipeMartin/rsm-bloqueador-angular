import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/core/shared/shared.module';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    UsuariosComponent, 
    ClientesComponent, 
    AdministradoresComponent, 
    EditFormComponent],
  imports: [
    SharedModule,
    UsuariosRoutingModule
  ],
  entryComponents: [
    EditFormComponent
  ]
})
export class UsuariosModule { }
