import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrativoRoutingModule} from './administrativo-routing.module';
import {AdministrativoComponent} from './administrativo.component';
import {TreeViewModule} from '@syncfusion/ej2-angular-navigations';
import {MaskedTextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {SharedModule} from 'src/app/core/shared/shared.module';
import {SharedModule as DashboardSharedModule} from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {UsuariosModule} from './usuarios/usuarios.module';
import {VeiculosModule} from './veiculos/veiculos.module';
import {DadosRastreadorModule} from './dados-rastreador/dados-rastreador.module';
import {ConfiguracaoModule} from './configuracao/configuracao.module';


@NgModule({
  declarations: [
    AdministrativoComponent,
  ],
  imports: [
    CommonModule,
    AdministrativoRoutingModule,
    TreeViewModule,
    MaskedTextBoxModule,
    SharedModule,
    DashboardSharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    UsuariosModule,
    VeiculosModule,
    DadosRastreadorModule,
    ConfiguracaoModule
  ]
})
export class AdministrativoModule {
}
